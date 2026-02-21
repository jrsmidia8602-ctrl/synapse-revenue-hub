import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle, Mail, Upload } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/Footer";

export default function SandboxPage() {
  const [validationType, setValidationType] = useState<"single" | "bulk">("single");
  const [singleEmail, setSingleEmail] = useState("");
  const [bulkEmails, setBulkEmails] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleValidateSingle = async () => {
    if (!singleEmail.trim()) return;
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResults([
        {
          email: singleEmail,
          valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(singleEmail),
          deliverable: Math.random() > 0.3,
          riskScore: Math.floor(Math.random() * 100),
        },
      ]);
      setShowResults(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleValidateBulk = async () => {
    if (!bulkEmails.trim()) return;
    setIsLoading(true);
    const emailList = bulkEmails.split("\n").filter((e) => e.trim());
    // Simulate API call
    setTimeout(() => {
      setResults(
        emailList.map((email) => ({
          email: email.trim(),
          valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
          deliverable: Math.random() > 0.3,
          riskScore: Math.floor(Math.random() * 100),
        }))
      );
      setShowResults(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Email Validation Sandbox</h1>
            <p className="text-lg text-gray-600">
              Test GoldMail AI email validation in real-time. No signup required.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card>
              <CardHeader>
                <CardTitle>Validation Tool</CardTitle>
                <CardDescription>Choose single or bulk validation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Validation Type Selector */}
                <div className="flex gap-2 border rounded-lg p-1 bg-gray-50">
                  <Button
                    variant={validationType === "single" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setValidationType("single")}
                    className="flex-1"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Single Email
                  </Button>
                  <Button
                    variant={validationType === "bulk" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setValidationType("bulk")}
                    className="flex-1"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Bulk Emails
                  </Button>
                </div>

                {/* Single Email Input */}
                {validationType === "single" && (
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <Input
                      type="email"
                      placeholder="test@example.com"
                      value={singleEmail}
                      onChange={(e) => setSingleEmail(e.target.value)}
                      className="w-full"
                    />
                    <Button
                      onClick={handleValidateSingle}
                      disabled={!singleEmail.trim() || isLoading}
                      className="w-full"
                    >
                      {isLoading ? "Validating..." : "Validate Email"}
                    </Button>
                  </div>
                )}

                {/* Bulk Emails Input */}
                {validationType === "bulk" && (
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">Email Addresses</label>
                    <p className="text-xs text-gray-500">Enter one email per line (max 100)</p>
                    <Textarea
                      placeholder="email1@example.com&#10;email2@example.com&#10;email3@example.com"
                      value={bulkEmails}
                      onChange={(e) => setBulkEmails(e.target.value)}
                      rows={6}
                      className="w-full"
                    />
                    <Button
                      onClick={handleValidateBulk}
                      disabled={!bulkEmails.trim() || isLoading}
                      className="w-full"
                    >
                      {isLoading ? "Validating..." : "Validate Emails"}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card>
              <CardHeader>
                <CardTitle>Validation Results</CardTitle>
                <CardDescription>{results.length} results</CardDescription>
              </CardHeader>
              <CardContent>
                {!showResults ? (
                  <div className="text-center py-12 text-gray-500">
                    <Mail className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p>Results will appear here</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {results.map((result, index) => (
                      <div key={index} className="border rounded-lg p-3 bg-gray-50">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="font-mono text-sm text-gray-900 truncate">{result.email}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
                              <span>Deliverable: {result.deliverable ? "Yes" : "No"}</span>
                              <span>Risk: {result.riskScore}%</span>
                            </div>
                          </div>
                          <div>
                            {result.valid ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <AlertCircle className="w-5 h-5 text-red-600" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* CTA to Dashboard */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Need production validation?</h3>
            <p className="text-gray-600 mb-6">Sign up for GoldMail AI to access advanced features, bulk processing, and API integration.</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
