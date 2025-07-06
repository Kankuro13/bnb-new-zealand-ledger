import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { ServicesPage } from "./pages/Services";
import { AboutPage } from "./pages/About";
import { TeamPage } from "./pages/Team";
import { TestimonialsPage } from "./pages/Testimonials";
import { ResourcesPage } from "./pages/Resources";
import { ContactPage } from "./pages/Contact";
import { IndustriesPage } from "./pages/Industries";
import { PayrollManagementPage } from "./pages/services/PayrollManagement";
import { GSTFilingPage } from "./pages/services/GSTFiling";
import { XeroTrainingPage } from "./pages/services/XeroTraining";
import { AccountsReceivablePage } from "./pages/services/AccountsReceivable";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/payroll-management" element={<PayrollManagementPage />} />
          <Route path="/services/accounts-receivable" element={<AccountsReceivablePage />} />
          <Route path="/services/accounts-payable" element={<AccountsReceivablePage />} />
          <Route path="/services/credit-control" element={<AccountsReceivablePage />} />
          <Route path="/services/payroll-data-entry" element={<PayrollManagementPage />} />
          <Route path="/services/gst-filing" element={<GSTFilingPage />} />
          <Route path="/services/paye-services" element={<GSTFilingPage />} />
          <Route path="/services/income-tax-returns" element={<GSTFilingPage />} />
          <Route path="/services/xero-training" element={<XeroTrainingPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
