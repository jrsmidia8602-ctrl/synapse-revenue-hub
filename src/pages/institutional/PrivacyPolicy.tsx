import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-20 px-4">
        <div className="max-w-4xl mx-auto prose max-w-none">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Privacy and Data Protection</h2>
            <p className="text-gray-700 mb-4">
              GoldMail AI (operated by XPEX SYSTEMS AI) respects user privacy and is committed to protecting customer data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect only the minimum required information necessary to operate the email validation service:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Account information (name, email, company)</li>
              <li>Email addresses submitted for validation</li>
              <li>API usage and analytics data</li>
              <li>Payment and billing information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
            <p className="text-gray-700 mb-4">
              Email validation data is processed securely and is not sold or shared with third parties. We use your data to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Perform email validation services</li>
              <li>Improve our platform and user experience</li>
              <li>Manage your account and billing</li>
              <li>Send important service notifications</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Rights</h2>
            <p className="text-gray-700 mb-4">
              Users maintain control over their data and may request deletion in accordance with applicable regulations including GDPR and CCPA.
            </p>
            <p className="text-gray-700">
              To exercise your rights, please contact us at privacy@goldmail.ai
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Security</h2>
            <p className="text-gray-700">
              We implement industry-standard security measures including encryption, access controls, and regular security audits to protect your data.
            </p>
          </section>

          <p className="text-gray-600 text-sm mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
