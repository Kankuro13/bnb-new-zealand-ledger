import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Users } from "lucide-react";

export const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Michael Thompson",
      company: "Thompson Construction Ltd",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "B&B Tax has transformed how we handle our payroll and GST. Their professional service and attention to detail have saved us countless hours and stress. Highly recommended!",
      gradient: "from-amber-600 to-yellow-600"
    },
    {
      name: "Sarah Mitchell",
      company: "Mitchell Marketing Agency",
      image: "https://images.unsplash.com/photo-1494790108755-2616c898834c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The team at B&B Tax is exceptional. They helped streamline our accounts receivable process and provided invaluable business advice. True professionals who care about their clients.",
      gradient: "from-orange-600 to-amber-600"
    },
    {
      name: "David Chen",
      company: "Chen's Restaurant Group",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Outstanding service! B&B Tax handles all our tax returns and compliance requirements flawlessly. Their expertise in the hospitality sector is impressive.",
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      name: "Lisa Rodriguez",
      company: "Creative Design Studio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Working with B&B Tax has been a game-changer for our small business. Their Xero training and ongoing support have made managing our finances so much easier.",
      gradient: "from-amber-700 to-orange-600"
    },
    {
      name: "James Wilson",
      company: "Wilson Electronics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Professional, reliable, and always available when we need them. B&B Tax has been instrumental in helping our business grow while staying compliant.",
      gradient: "from-orange-700 to-amber-700"
    },
    {
      name: "Emma Davis",
      company: "Davis Consulting",
      image: "https://images.unsplash.com/photo-1494790108755-2616c898834c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The expertise and personal attention we receive from B&B Tax is unmatched. They've helped optimize our tax strategy and improve our cash flow significantly.",
      gradient: "from-yellow-700 to-orange-700"
    }
  ];

  const stats = [
    { number: "200+", label: "Happy Clients", icon: Users },
    { number: "10+", label: "Years Experience", icon: Star },
    { number: "99%", label: "Client Satisfaction", icon: Quote }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="h-6 w-6 text-accent" />
            <span className="text-accent font-mono text-sm tracking-wider uppercase">Client Testimonials</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued clients have to say about 
            working with B&B Tax and Accounting Service Limited.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="gradient-card border-0 text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="gradient-card hover:scale-105 transition-all duration-300 group border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-card to-secondary rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Join Our Satisfied Clients?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the difference professional accounting services can make for your business. 
              Let us handle your financial needs while you focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 inline-block"
              >
                Get Your Free Consultation
              </a>
              <a 
                href="tel:+64123456789" 
                className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 inline-block"
              >
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};