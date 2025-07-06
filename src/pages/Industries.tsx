import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Jumbotron } from "@/components/Jumbotron";
import { Building, Users, Zap, DollarSign, FileText, TrendingUp, Stethoscope, GraduationCap, Car, Home, Briefcase, Sparkles } from "lucide-react";

export const IndustriesPage = () => {
  const industries = [
    {
      icon: Building,
      title: "Construction & Building",
      description: "Specialized accounting for construction companies, including project-based accounting, progress billing, contract management, and compliance with building industry regulations.",
      features: ["Project Cost Tracking", "Progress Billing", "Subcontractor Management", "Safety Compliance Reporting"],
      color: "bg-amber-600"
    },
    {
      icon: Users,
      title: "Professional Services",
      description: "Tailored solutions for consultancies, law firms, accounting practices, and other professional service providers with time-based billing and client management needs.",
      features: ["Time Tracking Integration", "Client Billing", "Trust Account Management", "Professional Indemnity"],
      color: "bg-blue-600"
    },
    {
      icon: Zap,
      title: "Technology & Startups",
      description: "Modern accounting solutions for tech companies, software developers, and startups, including equity management, R&D tax credits, and growth accounting.",
      features: ["Equity Management", "R&D Tax Credits", "Subscription Billing", "Investor Reporting"],
      color: "bg-purple-600"
    },
    {
      icon: DollarSign,
      title: "Retail & E-commerce",
      description: "Comprehensive retail accounting including inventory management, point-of-sale integration, multi-location reporting, and online sales tracking.",
      features: ["Inventory Management", "POS Integration", "Multi-location Reporting", "Online Sales Tracking"],
      color: "bg-green-600"
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Medical",
      description: "Specialized accounting for medical practices, dental clinics, and healthcare providers, including patient billing, insurance claims, and regulatory compliance.",
      features: ["Patient Billing", "Insurance Claims", "Medical Equipment Depreciation", "Regulatory Compliance"],
      color: "bg-red-600"
    },
    {
      icon: TrendingUp,
      title: "Manufacturing",
      description: "Industrial accounting solutions including cost accounting, inventory management, production costing, and supply chain financial management.",
      features: ["Cost Accounting", "Production Costing", "Supply Chain Management", "Quality Control Costs"],
      color: "bg-orange-600"
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Educational institution accounting including student fee management, grant tracking, payroll for academic staff, and compliance reporting.",
      features: ["Student Fee Management", "Grant Tracking", "Academic Payroll", "Compliance Reporting"],
      color: "bg-indigo-600"
    },
    {
      icon: Car,
      title: "Transportation & Logistics",
      description: "Specialized accounting for transport companies, logistics providers, and freight operators, including fleet management and regulatory compliance.",
      features: ["Fleet Management", "Fuel Cost Tracking", "Driver Payroll", "Regulatory Compliance"],
      color: "bg-cyan-600"
    },
    {
      icon: Home,
      title: "Real Estate & Property",
      description: "Property management and real estate accounting including rental income tracking, property maintenance costs, and investment property reporting.",
      features: ["Rental Income Tracking", "Property Maintenance", "Investment Reporting", "Tenant Management"],
      color: "bg-teal-600"
    },
    {
      icon: Briefcase,
      title: "Financial Services",
      description: "Accounting solutions for financial advisors, insurance brokers, and investment firms, including client fund management and regulatory reporting.",
      features: ["Client Fund Management", "Regulatory Reporting", "Commission Tracking", "Compliance Monitoring"],
      color: "bg-slate-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Jumbotron */}
      <Jumbotron
        title="Industries We Serve"
        subtitle="Industry Expertise"
        description="With specialized knowledge across diverse industry sectors, we provide tailored accounting solutions that understand your unique business challenges and regulatory requirements."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        icon={<Building className="h-5 w-5 text-yellow-400" />}
        badge="Industry Expertise"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {industries.map((industry, index) => (
              <Card key={index} className="gradient-card hover:scale-105 transition-all duration-300 group border-0 overflow-hidden">
                <CardHeader className="relative">
                  <div className={`w-14 h-14 ${industry.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <industry.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className={`absolute -top-2 -right-2 w-20 h-20 ${industry.color} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500`} />
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {industry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {industry.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-primary/10 rounded-3xl p-12 border border-primary/20">
            <Sparkles className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">
                Don't See Your Industry?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We work with businesses across all sectors. Our adaptable accounting solutions can be customized 
              to meet the unique needs of your industry.
            </p>
            <div className="inline-flex items-center space-x-4 px-6 py-3 bg-primary rounded-full text-white font-semibold">
              <span>Contact us to discuss your specific requirements</span>
            </div>
          </div>
      </div>
      
      <Footer />
    </div>
  );
};
