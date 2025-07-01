import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Users, FileText, DollarSign, CreditCard, Building, BookOpen, GraduationCap, TrendingUp, Sparkles } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Smart Payroll",
      description: "AI-enhanced payroll processing with real-time compliance monitoring and automated KiwiSaver management.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "Dynamic AR",
      description: "Intelligent accounts receivable with predictive payment analytics and automated follow-up sequences.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: CreditCard,
      title: "Streamlined AP",
      description: "Next-gen accounts payable with OCR invoice scanning and smart vendor payment optimization.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: DollarSign,
      title: "Proactive Control",
      description: "Machine learning-powered credit management with risk assessment and collection automation.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Data Intelligence",
      description: "Advanced payroll analytics with real-time reporting and predictive workforce insights.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Building,
      title: "GST Automation",
      description: "Fully automated GST filing with real-time IRD integration and compliance verification.",
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "PAYE Excellence",
      description: "Revolutionary PAYE management with instant calculations and automated IRD submissions.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: BookOpen,
      title: "Tax Optimization",
      description: "AI-driven tax return preparation with maximum deduction identification and efficiency optimization.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: GraduationCap,
      title: "Xero Mastery",
      description: "Immersive Xero training with VR modules and personalized learning paths for your team.",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Zap className="h-6 w-6 text-accent" />
            <span className="text-accent font-mono text-sm tracking-wider uppercase">Revolutionary Services</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Next-Gen Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of accounting with our AI-powered platform that transforms 
            traditional processes into intelligent, automated workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-primary font-semibold">Powered by Advanced AI Technology</span>
            <Sparkles className="h-5 w-5 text-accent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
