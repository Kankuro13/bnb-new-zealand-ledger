import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Shield, Clock, Heart, Zap } from "lucide-react";

export const AboutPage = () => {
  const values = [
    {
      icon: Rocket,
      title: "Professional Excellence",
      description: "We combine years of experience with proven methodologies to deliver exceptional accounting services that exceed expectations.",
      gradient: "from-amber-600 to-yellow-600"
    },
    {
      icon: Shield,
      title: "Trusted Partnership",
      description: "Build long-term relationships with our clients based on trust, reliability, and consistent delivery of professional accounting services.",
      gradient: "from-orange-600 to-amber-600"
    },
    {
      icon: Clock,
      title: "Timely & Accurate",
      description: "Efficient processing and meticulous attention to detail ensures your accounting needs are met on time, every time.",
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      icon: Heart,
      title: "Small Business Focus",
      description: "Specialized expertise in small business accounting with personalized service tailored to your unique requirements.",
      gradient: "from-amber-700 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="h-5 w-5 text-accent" />
              <span className="text-accent font-mono text-sm tracking-wider uppercase">About Our Company</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Professional
              </span>
              <br />
              <span className="text-foreground">Accounting Excellence</span>
            </h1>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At B&B Tax and Accounting Service Limited, we specialize in providing 
                <span className="text-primary font-semibold"> comprehensive accounting services</span> tailored 
                to the needs of small businesses across New Zealand.
              </p>
              <p>
                Our <span className="text-accent font-semibold">experienced team</span> is dedicated to helping you 
                stay compliant, organized, and focused on growing your business through professional 
                accounting solutions that work.
              </p>
              <p>
                We understand the unique challenges facing small businesses, 
                which is why we provide <span className="text-primary font-semibold">personalized service</span> with 
                the expertise and attention to detail your business deserves.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Professional accounting office environment"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl -z-10" />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="gradient-card hover:scale-105 transition-all duration-300 group border-0 text-center overflow-hidden">
                <CardHeader className="relative pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-card to-secondary rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-6 text-foreground">Why Choose B&B Tax?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="text-xl font-semibold text-primary mb-3">Experience</h4>
                <p className="text-muted-foreground">Over a decade of serving New Zealand businesses with comprehensive accounting solutions.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-accent mb-3">Expertise</h4>
                <p className="text-muted-foreground">Qualified professionals with deep knowledge of NZ tax law and business regulations.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary mb-3">Excellence</h4>
                <p className="text-muted-foreground">Commitment to delivering exceptional service and building long-term partnerships.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};