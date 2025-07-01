
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Quote, TrendingUp } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Chen",
      business: "TechStart Innovations",
      rating: 5,
      text: "B&B's AI-powered platform transformed our financial chaos into crystal-clear insights. The real-time analytics have been game-changing for our growth strategy.",
      date: "2 weeks ago",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Sofia Martinez",
      business: "Verde Sustainable Solutions",
      rating: 5,
      text: "The automation level is incredible! What used to take us days now happens in minutes. Their predictive analytics helped us identify cost savings we never knew existed.",
      date: "1 month ago",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "James Wilson",
      business: "Wilson Digital Agency",
      rating: 5,
      text: "Revolutionary doesn't even begin to describe it. The AI recommendations have optimized our cash flow beyond our wildest expectations. Absolutely phenomenal service.",
      date: "3 weeks ago",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Priya Patel",
      business: "MedTech Innovations",
      rating: 5,
      text: "The compliance automation alone has saved us countless hours and eliminated our regulatory stress. B&B's team combines cutting-edge tech with genuine expertise.",
      date: "1 month ago",
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Michael Thompson",
      business: "ThompsonBuild Construction",
      rating: 5,
      text: "From manual chaos to automated perfection in just weeks. The ROI tracking and project profitability insights have revolutionized how we operate.",
      date: "2 weeks ago",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      name: "Sarah Kim",
      business: "NextGen Marketing Hub",
      rating: 5,
      text: "The future of accounting is here, and B&B delivers it perfectly. Their platform's intelligence combined with personal touch creates an unbeatable combination.",
      date: "1 week ago",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <TrendingUp className="h-6 w-6 text-accent" />
            <span className="text-accent font-mono text-sm tracking-wider uppercase">Success Stories</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Client Transformations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Real businesses, real results. See how our revolutionary platform has transformed 
            financial operations across New Zealand.
          </p>
          
          <div className="flex justify-center items-center space-x-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">5.0</span>
              <p className="text-muted-foreground text-sm">Perfect Rating</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <span className="text-3xl font-bold text-accent">{testimonials.length}+</span>
              <p className="text-muted-foreground text-sm">Success Stories</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="gradient-card hover:scale-105 transition-all duration-300 group border-0 overflow-hidden">
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className={`h-8 w-8 bg-gradient-to-br ${testimonial.gradient} bg-clip-text text-transparent opacity-60 group-hover:opacity-100 transition-opacity`} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className={`bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent font-semibold`}>
                    {testimonial.business}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 font-mono">{testimonial.date}</p>
                </div>
                <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${testimonial.gradient} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500`} />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">Join 500+ businesses already transforming with us</span>
          </div>
        </div>
      </div>
    </section>
  );
};
