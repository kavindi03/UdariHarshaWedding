'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, CheckCircle, XCircle, Send, User, Phone, Mail, MessageSquare } from 'lucide-react';

interface RSVPData {
  name: string;
  phone: string;
  attending: boolean;
}

export default function GoogleFormRSVP() {
  const [formData, setFormData] = useState<RSVPData>({
    name: '',
    phone: '',
    attending: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  // Admin states
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showRSVPData, setShowRSVPData] = useState(false);
  
  // Admin password (you can change this)
  const ADMIN_PASSWORD = 'udariharsha2026';

  // Google Sheets Webhook URL - Replace with your actual Google Apps Script URL
  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxfGJ11VdKhRNJDPW_nYuqjxT4tv5jT1Or8_A4p1RLBhdyAduzx8TklEPY0EBJ_M1py/exec';

  // Alternative: Use a simple Google Form (easier setup)
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf1234567890abcdef/formResponse';

  // Google Form field IDs - You'll get these from your Google Form
  const FORM_FIELDS = {
    name: 'entry.2005620554',
    phone: 'entry.1045781291',
    attending: 'entry.1168473476',
  };

  const handleInputChange = (field: keyof RSVPData, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleAdminLogin = () => {
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setShowAdminPanel(true);
      setAdminPassword('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const handleAdminLogout = () => {
    setIsAuthenticated(false);
    setShowAdminPanel(false);
    setShowRSVPData(false);
    setAdminPassword('');
  };

  const getRSVPData = () => {
    return JSON.parse(localStorage.getItem('weddingRSVPs') || '[]');
  };

  const getAttendanceStats = () => {
    const data = getRSVPData();
    const attending = data.filter((rsvp: any) => rsvp.attending).length;
    const notAttending = data.filter((rsvp: any) => !rsvp.attending).length;
    return { total: data.length, attending, notAttending };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Prepare data for Google Sheets
      const sheetData = {
        name: formData.name,
        phone: formData.phone,
        attending: formData.attending ? 'Yes' : 'No',
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      };

      // Submit to Google Sheets via Google Apps Script
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sheetData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        console.log('RSVP submitted to Google Sheets successfully');
      } else {
        throw new Error('Failed to submit to Google Sheets');
      }

      // Also submit to Google Form as backup
      const formBody = new URLSearchParams();
      formBody.append(FORM_FIELDS.name, formData.name);
      formBody.append(FORM_FIELDS.phone, formData.phone);
      formBody.append(FORM_FIELDS.attending, formData.attending ? 'Yes' : 'No');

      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      // Store in localStorage for local backup
      const existingRSVPs = JSON.parse(localStorage.getItem('weddingRSVPs') || '[]');
      existingRSVPs.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('weddingRSVPs', JSON.stringify(existingRSVPs));

    } catch (err) {
      setError('Failed to submit RSVP. Please try again.');
      console.error('RSVP submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadRSVPData = () => {
    const rsvps = JSON.parse(localStorage.getItem('weddingRSVPs') || '[]');
    
    // Create enhanced CSV content
    const headers = ['No.', 'Name', 'Phone Number', 'Attending', 'Response Date', 'Response Time'];
    const csvContent = [
      headers.join(','),
      ...rsvps.map((rsvp: any, index: number) => [
        index + 1,
        `"${rsvp.name}"`,
        `"${rsvp.phone}"`,
        `"${rsvp.attending ? 'Yes - Attending' : 'No - Not Attending'}"`,
        `"${new Date(rsvp.timestamp).toLocaleDateString()}"`,
        `"${new Date(rsvp.timestamp).toLocaleTimeString()}"`
      ].join(','))
    ].join('\n');

    // Download CSV file with better filename
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Wedding-RSVP-Data-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  // Admin Panel Component
  if (showAdminPanel && isAuthenticated) {
    const rsvpData = getRSVPData();
    const stats = getAttendanceStats();
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-purple-50 via-amber-50 to-rose-50 rounded-3xl p-8 border-2 border-purple-200/50 shadow-xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-amber-600" style={{ fontFamily: 'serif', letterSpacing: '0.05em' }}>
            Admin Panel - RSVP Data
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAdminLogout}
            className="bg-gradient-to-r from-red-500 to-rose-500 text-white px-4 py-2 rounded-full font-semibold"
          >
            Logout
          </motion.button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-amber-200">
            <div className="text-3xl font-bold text-amber-600">{stats.total}</div>
            <div className="text-sm text-gray-600">Total Responses</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-green-200">
            <div className="text-3xl font-bold text-green-600">{stats.attending}</div>
            <div className="text-sm text-gray-600">Attending</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-red-200">
            <div className="text-3xl font-bold text-red-600">{stats.notAttending}</div>
            <div className="text-sm text-gray-600">Not Attending</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadRSVPData}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg"
            style={{ fontFamily: 'serif', letterSpacing: '0.02em' }}
          >
            Download Excel Sheet
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowRSVPData(!showRSVPData)}
            className="flex-1 bg-gradient-to-r from-purple-500 to-amber-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg"
            style={{ fontFamily: 'serif', letterSpacing: '0.02em' }}
          >
            {showRSVPData ? 'Hide' : 'Show'} Data
          </motion.button>
        </div>

        {/* RSVP Data Table */}
        {showRSVPData && rsvpData.length > 0 && (
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-purple-200 max-h-96 overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="bg-purple-100 sticky top-0">
                <tr>
                  <th className="p-2 text-left">No.</th>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Phone</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {rsvpData.map((rsvp: any, index: number) => (
                  <tr key={index} className="border-b border-purple-100">
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2 font-medium">{rsvp.name}</td>
                    <td className="p-2">{rsvp.phone}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        rsvp.attending 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {rsvp.attending ? 'Attending' : 'Not Attending'}
                      </span>
                    </td>
                    <td className="p-2 text-xs">
                      {new Date(rsvp.timestamp).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {rsvpData.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p className="text-lg">No RSVP responses yet.</p>
          </div>
        )}
      </motion.div>
    );
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-green-50 via-amber-50 to-pink-50 rounded-3xl p-10 text-center border-2 border-amber-200/50 shadow-xl"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-block mb-6"
        >
          <CheckCircle className="w-20 h-20 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500" />
        </motion.div>
        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600" style={{ fontFamily: 'serif', letterSpacing: '0.05em' }}>
          Thank You for Your RSVP! 
        </h3>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium italic" style={{ fontFamily: 'serif', lineHeight: '1.6' }}>
          {formData.attending 
            ? "We're so excited to celebrate with you!"
            : "Thank you for letting us know. We'll miss you!"
          }
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              phone: '',
              attending: true,
            });
          }}
          className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-8 py-3 rounded-full hover:from-amber-600 hover:to-rose-600 transition-all shadow-lg font-bold"
          style={{ fontFamily: 'serif', letterSpacing: '0.02em' }}
        >
          Submit Another RSVP
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-white via-amber-50 to-rose-50 rounded-3xl shadow-2xl p-10 border-2 border-amber-200/50">
      {/* Admin Login Button */}
      <div className="flex justify-end mb-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAdminPanel(true)}
          className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-medium hover:bg-purple-200 transition-colors"
        >
          Admin Access
        </motion.button>
      </div>

      {/* Admin Login Modal */}
      {showAdminPanel && !isAuthenticated && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowAdminPanel(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full"
          >
            <h4 className="text-2xl font-serif font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-amber-600">
              Admin Login
            </h4>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-4"
              style={{ fontFamily: 'serif' }}
            />
            {error && (
              <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
            )}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAdminLogin}
                className="flex-1 bg-gradient-to-r from-purple-500 to-amber-500 text-white px-6 py-3 rounded-xl font-bold"
                style={{ fontFamily: 'serif' }}
              >
                Login
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowAdminPanel(false);
                  setAdminPassword('');
                  setError('');
                }}
                className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold"
                style={{ fontFamily: 'serif' }}
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <div className="text-center mb-8">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-block mb-4"
        >
          <Heart className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500 fill-current" />
        </motion.div>
        <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600" style={{ fontFamily: 'serif', letterSpacing: '0.05em', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
          RSVP
        </h3>
        <p className="text-xl md:text-2xl text-gray-700 font-medium italic" style={{ fontFamily: 'serif' }}>
          Will you be attending our special day?
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="flex items-center text-lg font-semibold text-gray-700 mb-3" style={{ fontFamily: 'serif' }}>
            <User className="w-5 h-5 mr-3 text-amber-500" />
            Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-5 py-3 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-800 text-lg font-medium bg-white/80 backdrop-blur-sm transition-all"
            placeholder="Enter your name"
            style={{ fontFamily: 'serif' }}
          />
        </div>
        {/* Phone */}
        <div>
          <label className="flex items-center text-lg font-semibold text-gray-700 mb-3" style={{ fontFamily: 'serif' }}>
            <Phone className="w-5 h-5 mr-3 text-rose-500" />
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-5 py-3 border-2 border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent text-gray-800 text-lg font-medium bg-white/80 backdrop-blur-sm transition-all"
            placeholder="Phone number"
            style={{ fontFamily: 'serif' }}
          />
        </div>
        {/* Attendance */}
        <div>
          <label className="text-lg font-semibold text-gray-700 mb-4 block" style={{ fontFamily: 'serif' }}>
            Will you be attending? *
          </label>
          <div className="flex space-x-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleInputChange('attending', true)}
              className={`flex-1 py-4 px-6 rounded-xl font-bold transition-all ${
                formData.attending
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-gray-200'
              }`}
              style={{ fontFamily: 'serif', letterSpacing: '0.02em' }}
            >
              <CheckCircle className="w-6 h-6 inline mr-3" />
              Yes, I'll be there!
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleInputChange('attending', false)}
              className={`flex-1 py-4 px-6 rounded-xl font-bold transition-all ${
                !formData.attending
                  ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-gray-200'
              }`}
              style={{ fontFamily: 'serif', letterSpacing: '0.02em' }}
            >
              <XCircle className="w-6 h-6 inline mr-3" />
              Sorry, can't make it
            </motion.button>
          </div>
        </div>
        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-xl font-bold hover:from-amber-600 hover:to-rose-600 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
          style={{ fontFamily: 'serif', letterSpacing: '0.02em', fontSize: '1.1rem' }}
        >
          {isSubmitting ? 'Submitting...' : 'Send RSVP'}
          <Send className="w-6 h-6 inline ml-3" />
        </motion.button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
}
