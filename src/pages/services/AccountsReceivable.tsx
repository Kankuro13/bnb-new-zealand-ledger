import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, CheckCircle, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

export const AccountsReceivablePage = () => {
  const features = [
    "Invoice creation and management",
    "Customer payment tracking",
    "Outstanding payment follow-up",
    "Credit management and assessment",
    "Payment reminders and notices",
    "Debt collection support",
    "Cash flow improvement strategies",
    "Customer account reconciliation"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <FileText className="h-6 w-6 text-accent" />
              <span className="text-accent font-mono text-sm tracking-wider uppercase">AR Services</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-primary">
                Accounts Receivable
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional invoice management and payment collection services to improve your cash flow and reduce outstanding debts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Service Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6">What's Included</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Accounts receivable management"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-primary/10 rounded-3xl p-12 border border-primary/20">
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-primary">
                  Improve Your Cash Flow Today
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let us help you collect payments faster and maintain healthy customer relationships.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
