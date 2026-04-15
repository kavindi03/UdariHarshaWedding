import GoogleFormsSetup from '@/components/GoogleFormsSetup';

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Wedding Invitation Setup
        </h1>
        <GoogleFormsSetup />
      </div>
    </div>
  );
}
