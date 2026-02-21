import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardOverview from "./pages/dashboard/DashboardOverview";
import DashboardUsage from "./pages/dashboard/DashboardUsage";
import DashboardBilling from "./pages/dashboard/DashboardBilling";
import DashboardKeys from "./pages/dashboard/DashboardKeys";
import NotFound from "./pages/NotFound";
import ApiDocs from "./pages/ApiDocs";
import PricingPage from "./pages/institutional/PricingPage";
import SecurityPage from "./pages/institutional/SecurityPage";
import PrivacyPolicy from "./pages/institutional/PrivacyPolicy";
import TermsOfService from "./pages/institutional/TermsOfService";
import AccountSettings from "./pages/AccountSettings";
import SandboxPage from "./pages/SandboxPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/sandbox" element={<SandboxPage />} />
            <Route path="/docs" element={<ApiDocs />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route
              path="/account-settings"
              element={
                <ProtectedRoute>
                  <AccountSettings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<DashboardOverview />} />
              <Route path="usage" element={<DashboardUsage />} />
              <Route path="billing" element={<DashboardBilling />} />
              <Route path="keys" element={<DashboardKeys />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
