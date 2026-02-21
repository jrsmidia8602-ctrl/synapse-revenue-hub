import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-20 px-4">
        <div className="max-w-4xl mx-auto prose max-w-none">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Platform Usage Terms</h2>
            <p className="text-gray-700 mb-4">
              By using GoldMail AI, users agree to comply with applicable laws and these platform policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptable Use</h2>
            <p className="text-gray-700 mb-4">The service may not be used for:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Unlawful data harvesting or collection</li>
              <li>Malicious activities or attacks</li>
              <li>Spam or unsolicited communications</li>
              <li>Harassment or threatening behavior</li>
              <li>Circumventing security measures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Account Suspension</h2>
            <p className="text-gray-700">
              XPEX SYSTEMS AI reserves the right to suspend accounts that violate these usage terms. Suspended accounts will be notified with details of the violation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Service Availability</h2>
            <p className="text-gray-700 mb-4">Service availability targets are defined according to the subscribed plan level:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Starter Plan: 95% uptime guarantee</li>
              <li>Growth Plan: 99% uptime guarantee</li>
              <li>Scale Plan: 99.9% uptime guarantee (SLA)</li>
              <li>Enterprise: Custom SLA upon request</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-gray-700">
              GoldMail AI is provided "as is" without warranties. We are not liable for indirect, incidental, or consequential damages arising from service use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of updated terms.
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
