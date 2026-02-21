import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Bell } from "lucide-react";

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Data Encryption",
      description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.",
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Role-based access control (RBAC) with strict authentication policies and audit logging.",
    },
    {
      icon: Eye,
      title: "Monitoring",
      description: "24/7 monitoring systems detect anomalies and enforce rate limiting to protect platform stability.",
    },
    {
      icon: Bell,
      title: "Compliance",
      description: "GDPR, CCPA, and SOC 2 Type II compliant. Regular security audits and penetration testing.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Security Standards</h1>
            <p className="text-lg text-gray-600">
              GoldMail AI is built with security as a core principle. Powered by XPEX SYSTEMS AI infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {securityFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="border rounded-lg p-6 bg-white">
                  <Icon className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Security Commitment</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>All infrastructure hosted on enterprise-grade cloud providers with redundancy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Regular security updates and patches applied within 24 hours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Annual third-party security audits and penetration testing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Dedicated security team monitoring platform 24/7</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Incident response plan with SLA guarantees</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
