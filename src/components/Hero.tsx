
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles, TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-1/6 w-8 h-8 bg-primary/50 rounded-full animate-float opacity-30" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="h-5 w-5 text-accent" />
              <span className="text-accent font-mono text-sm tracking-wider uppercase">Premium Accounting Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Future-Ready
              </span>
              <br />
              <span className="text-foreground">Accounting</span>
              <br />
              <span className="text-muted-foreground text-3xl md:text-4xl">for NZ Businesses</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Revolutionary accounting services powered by cutting-edge technology. 
              We transform your financial chaos into crystal-clear insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold group">
                Launch Your Success
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-full text-lg">
                Explore Solutions
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: CheckCircle, text: "AI-Powered Analytics" },
                { icon: TrendingUp, text: "Growth Optimization" },
                { icon: Sparkles, text: "Real-time Insights" },
                { icon: CheckCircle, text: "24/7 Compliance" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Modern financial dashboard"
                className="rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform -rotate-2 scale-105 -z-10" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-2xl animate-pulse opacity-80" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};
