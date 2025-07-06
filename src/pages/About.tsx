import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Jumbotron } from "@/components/Jumbotron";
import { Rocket, Shield, Clock, Heart, Zap, Sparkles } from "lucide-react";

export const AboutPage = () => {
  const values = [
    {
      icon: Rocket,
      title: "Professional Excellence",
      description: "We combine years of experience with proven methodologies to deliver exceptional accounting services that exceed expectations."
    },
    {
      icon: Shield,
      title: "Trusted Partnership",
      description: "Build long-term relationships with our clients based on trust, reliability, and consistent delivery of professional accounting services."
    },
    {
      icon: Clock,
      title: "Timely & Accurate",
      description: "Efficient processing and meticulous attention to detail ensures your accounting needs are met on time, every time."
    },
    {
      icon: Heart,
      title: "Small Business Focus",
      description: "Specialized expertise in small business accounting with personalized service tailored to your unique requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Jumbotron */}
      <Jumbotron
        title="About B&B Tax"
        subtitle="Professional Accounting Excellence"
        description="At B&B Tax and Accounting Service Limited, we specialize in providing comprehensive accounting services tailored to the needs of small businesses across New Zealand."
        backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        icon={<Sparkles className="h-5 w-5 text-yellow-400" />}
        badge="About Our Company"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="order-2 lg:order-1">
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
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl -z-10" />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-16 text-primary">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:scale-105 transition-all duration-300 group border border-border text-center overflow-hidden">
                <CardHeader className="relative pb-4">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
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

        {/* History Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Our Journey
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted accounting partner for hundreds of New Zealand businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  2015
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Founded with Vision</h3>
                  <p className="text-muted-foreground">Started as a small practice with a mission to provide personalized accounting services to New Zealand small businesses.</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  2018
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Digital Transformation</h3>
                  <p className="text-muted-foreground">Embraced cloud-based accounting solutions and digital processes to better serve our growing client base.</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  2021
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Team Expansion</h3>
                  <p className="text-muted-foreground">Grew our team of qualified professionals to include specialized expertise in payroll, tax planning, and business advisory.</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  2024
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Leading Innovation</h3>
                  <p className="text-muted-foreground">Today, we serve over 300+ businesses across New Zealand, combining traditional accounting excellence with modern technology.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="B&B Tax team through the years"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-2xl" />
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-card border border-border rounded-2xl p-12">
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
      
      <Footer />
    </div>
  );
};