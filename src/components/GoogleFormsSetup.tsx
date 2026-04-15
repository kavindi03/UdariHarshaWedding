'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, CheckCircle, AlertCircle, FileText, Link } from 'lucide-react';

export default function GoogleFormsSetup() {
  const [copied, setCopied] = useState(false);

  const googleFormSetup = {
    formUrl: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/edit',
    instructions: [
      {
        title: "1. Create Google Form",
        description: "Go to forms.google.com and create a new form",
        code: "https://forms.google.com"
      },
      {
        title: "2. Add Fields",
        description: "Add these fields to your form:",
        fields: [
          "Name (Short answer)",
          "Email (Short answer)", 
          "Phone (Short answer)",
          "Will you attend? (Multiple choice - Yes/No)",
          "Number of guests (Multiple choice - 1,2,3,4,5)",
          "Dietary restrictions (Short answer - Optional)",
          "Personal message (Paragraph - Optional)"
        ]
      },
      {
        title: "3. Get Form ID",
        description: "From the form URL, copy the form ID. Example:",
        code: "https://docs.google.com/forms/d/e/1FAIpQLSdX1234567890abcdef/viewform",
        highlight: "1FAIpQLSdX1234567890abcdef"
      },
      {
        title: "4. Update Configuration",
        description: "Update the FORM_FIELDS in GoogleFormRSVP.tsx with your field IDs:",
        code: `const FORM_FIELDS = {
  name: 'entry.1234567890',      // Replace with actual field ID
  email: 'entry.0987654321',     // Replace with actual field ID
  phone: 'entry.1122334455',     // Replace with actual field ID
  attending: 'entry.5566778899', // Replace with actual field ID
  guests: 'entry.9988776655',    // Replace with actual field ID
  message: 'entry.2233445566',  // Replace with actual field ID
  dietaryRestrictions: 'entry.4455667788', // Replace with actual field ID
};`
      },
      {
        title: "5. Find Field IDs",
        description: "To find field IDs, inspect the form or use the form's pre-filled URL feature",
        code: "Right-click on form fields → Inspect → Look for 'name=' attribute"
      }
    ]
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <FileText className="w-12 h-12 text-purple-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Google Forms Setup Guide</h2>
        <p className="text-gray-600">Follow these steps to integrate Google Forms with your RSVP system</p>
      </div>

      <div className="space-y-6">
        {googleFormSetup.instructions.map((instruction, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
              <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                {index + 1}
              </span>
              {instruction.title}
            </h3>
            <p className="text-gray-600 mb-4">{instruction.description}</p>
            
            {instruction.code && (
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-xs">Code/URL</span>
                  <button
                    onClick={() => copyToClipboard(instruction.code)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <pre className="whitespace-pre-wrap break-all">
                  {instruction.code}
                  {instruction.highlight && (
                    <span className="bg-yellow-500 text-black px-1 rounded">
                      {instruction.highlight}
                    </span>
                  )}
                </pre>
              </div>
            )}

            {instruction.fields && (
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Required Fields:</h4>
                <ul className="space-y-1">
                  {instruction.fields.map((field, fieldIndex) => (
                    <li key={fieldIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                      {field}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Quick Setup Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 text-center"
      >
        <a
          href={googleFormSetup.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors"
        >
          <Link className="w-5 h-5 mr-2" />
          Create Google Form Now
        </a>
      </motion.div>

      {/* Important Notes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-4"
      >
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-yellow-800 mb-1">Important Notes:</h4>
            <ul className="text-yellow-700 text-sm space-y-1">
              <li>• Google Forms integration requires CORS workarounds</li>
              <li>• Data is also stored in localStorage as backup</li>
              <li>• You can download RSVP data as CSV from the website</li>
              <li>• Test your form integration before going live</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
