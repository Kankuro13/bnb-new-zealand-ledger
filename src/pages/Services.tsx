import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Users, FileText, DollarSign, CreditCard, Building, BookOpen, GraduationCap, TrendingUp, Sparkles } from "lucide-react";

export const ServicesPage = () => {
  const services = [
    {
      icon: Users,
      title: "Smart Payroll",
      description: "Comprehensive payroll processing with real-time compliance monitoring, automated KiwiSaver management, and seamless integration with IRD systems for accurate, on-time payments.",
      gradient: "from-amber-600 to-yellow-600"
    },
    {
      icon: FileText,
      title: "Dynamic AR",
      description: "Intelligent accounts receivable management with predictive payment analytics, automated follow-up sequences, and comprehensive cash flow optimization strategies.",
      gradient: "from-orange-600 to-amber-600"
    },
    {
      icon: CreditCard,
      title: "Streamlined AP",
      description: "Next-generation accounts payable processing with OCR invoice scanning, smart vendor payment optimization, and automated expense tracking systems.",
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      icon: DollarSign,
      title: "Proactive Control",
      description: "Advanced credit management with machine learning-powered risk assessment, automated collection processes, and real-time debtor monitoring.",
      gradient: "from-amber-700 to-orange-600"
    },
    {
      icon: TrendingUp,
      title: "Data Intelligence",
      description: "Comprehensive payroll analytics with real-time reporting, predictive workforce insights, and customizable dashboard solutions for informed decision-making.",
      gradient: "from-orange-700 to-amber-700"
    },
    {
      icon: Building,
      title: "GST Automation",
      description: "Fully automated GST filing with seamless IRD integration, real-time compliance verification, and comprehensive tax optimization strategies.",
      gradient: "from-yellow-700 to-orange-700"
    },
    {
      icon: Zap,
      title: "PAYE Excellence",
      description: "Revolutionary PAYE management with instant calculations, automated IRD submissions, and comprehensive employee tax optimization services.",
      gradient: "from-amber-600 to-yellow-700"
    },
    {
      icon: BookOpen,
      title: "Tax Optimization",
      description: "Advanced tax return preparation with AI-driven deduction identification, maximum efficiency optimization, and comprehensive compliance assurance.",
      gradient: "from-orange-600 to-amber-600"
    },
    {
      icon: GraduationCap,
      title: "Xero Mastery",
      description: "Comprehensive Xero training with immersive learning modules, personalized training paths, and ongoing support for your entire team.",
      gradient: "from-yellow-600 to-amber-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Zap className="h-6 w-6 text-accent" />
            <span className="text-accent font-mono text-sm tracking-wider uppercase">Our Services</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Comprehensive Solutions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience professional accounting services designed specifically for New Zealand businesses, 
            combining traditional expertise with modern efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="gradient-card hover:scale-105 transition-all duration-300 group border-0 overflow-hidden">
              <CardHeader className="relative">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500`} />
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-primary font-semibold">Professional Excellence Since 2010</span>
            <Sparkles className="h-5 w-5 text-accent animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};