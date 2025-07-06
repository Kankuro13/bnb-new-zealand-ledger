import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, CheckCircle, ArrowRight, Clock, DollarSign, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

export const PayrollManagementPage = () => {
  const features = [
    "Accurate payroll processing and calculations",
    "Payslip preparation and distribution",
    "Leave management and tracking",
    "KiwiSaver compliance and contributions",
    "Holiday pay calculations",
    "Overtime and penalty rate calculations",
    "PAYE and ACC levy calculations",
    "Employment agreement compliance"
  ];

  const benefits = [
    { icon: Clock, title: "Time Saving", description: "Automated payroll processing saves hours every pay period" },
    { icon: Shield, title: "Compliance", description: "Stay compliant with all New Zealand employment laws" },
    { icon: DollarSign, title: "Cost Effective", description: "Reduce payroll processing costs and errors" },
    { icon: CheckCircle, title: "Accuracy", description: "99.9% accuracy rate with professional oversight" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Users className="h-6 w-6 text-accent" />
              <span className="text-accent font-mono text-sm tracking-wider uppercase">Payroll Services</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-primary">
                Payroll Management
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive payroll services ensuring your employees are paid accurately and on time, 
              while maintaining full compliance with New Zealand employment laws.
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

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process */}
          <Card className="gradient-card border-0 mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Our Payroll Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Data Collection", desc: "Gather employee hours, leave, and other payroll data" },
                  { step: "2", title: "Processing", desc: "Calculate wages, taxes, and deductions accurately" },
                  { step: "3", title: "Review", desc: "Professional review and quality assurance check" },
                  { step: "4", title: "Distribution", desc: "Deliver payslips and process payments" }
                ].map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                      {process.step}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{process.title}</h3>
                    <p className="text-sm text-muted-foreground">{process.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Testimonial */}
          <Card className="gradient-card border-0 mb-16">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-lg text-muted-foreground mb-4 italic">
                "B&B Tax has transformed our payroll process. No more late nights calculating wages - everything is handled professionally and on time."
              </p>
              <div>
                <p className="font-semibold text-foreground">Sarah Mitchell</p>
                <p className="text-sm text-muted-foreground">Mitchell Construction Ltd</p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-primary/10 rounded-3xl p-12 border border-primary/20">
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-primary">
                  Ready to Streamline Your Payroll?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let us handle your payroll so you can focus on growing your business. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-full text-lg">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
