
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Shield, Clock, Heart, Zap } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "We leverage cutting-edge technology to revolutionize traditional accounting practices",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Fortress Security",
      description: "Military-grade encryption and bulletproof data protection for complete peace of mind",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Lightning Speed",
      description: "Instant processing and real-time insights that keep you ahead of the competition",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Human Connection",
      description: "Technology enhanced by genuine care and personalized attention to your success",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="h-5 w-5 text-accent" />
              <span className="text-accent font-mono text-sm tracking-wider uppercase">About Our Mission</span>
            </div>
            
            <h2 className="text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Redefining
              </span>
              <br />
              <span className="text-foreground">Accounting Excellence</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At B&B Tax and Accounting, we're not just another accounting firm—we're 
                <span className="text-primary font-semibold"> digital transformation pioneers</span> revolutionizing 
                how New Zealand businesses handle their finances.
              </p>
              <p>
                Our fusion of <span className="text-accent font-semibold">advanced AI technology</span> and 
                deep industry expertise creates an unparalleled accounting experience that's both 
                incredibly powerful and refreshingly human.
              </p>
              <p>
                We believe every small business deserves enterprise-level financial intelligence, 
                which is why we've built our platform to deliver 
                <span className="text-primary font-semibold"> institutional-grade insights</span> with 
                the simplicity your team needs.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Modern office with advanced technology"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl -z-10 animate-pulse" />
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl animate-float opacity-80" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-30" />
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="gradient-card hover:scale-105 transition-all duration-300 group border-0 text-center overflow-hidden">
                <CardHeader className="relative pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${value.gradient} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500`} />
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
      </div>
    </section>
  );
};
