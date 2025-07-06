import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, CheckCircle, Sparkles, TrendingUp, Users, FileText, DollarSign, Star, MessageSquare, Zap, Calculator, Shield, BookOpen, CreditCard, Building, GraduationCap, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type CarouselApi = UseEmblaCarouselType[1];

export const IndexSummary = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [api]);

  // Track current slide
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const heroSlides = [
    {
      title: "Uncover business value in volatility with B&B Tax",
      subtitle: "",
      description: "Our audit, tax, and consulting specialists help organizations like yours navigate today's accelerating rate of change.",
      backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      image: "/lovable-uploads/183a6bc8-df45-4d4c-b13d-a992110190ac.png",
      features: [
        { icon: CheckCircle, text: "15+ Years Experience" },
        { icon: TrendingUp, text: "500+ Happy Clients" },
        { icon: Sparkles, text: "Complete Solutions" },
        { icon: CheckCircle, text: "100% IRD Compliant" }
      ]
    },
    {
      title: "Professional Tax Excellence for New Zealand Businesses",
      subtitle: "",
      description: "Navigate complex tax requirements with confidence. Our qualified professionals provide strategic tax planning and compliance services to optimize your business performance.",
      backgroundImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      features: [
        { icon: Calculator, text: "Strategic Tax Planning" },
        { icon: FileText, text: "GST & PAYE Filing" },
        { icon: Shield, text: "Audit Protection" },
        { icon: TrendingUp, text: "Tax Optimization" }
      ]
    },
    {
      title: "Transform your financial management with digital solutions",
      subtitle: "",
      description: "Leverage cutting-edge cloud technology and real-time insights to streamline operations, enhance accuracy, and drive informed business decisions.",
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      features: [
        { icon: Zap, text: "Cloud-Based Systems" },
        { icon: BookOpen, text: "Real-Time Reporting" },
        { icon: Users, text: "24/7 Access" },
        { icon: DollarSign, text: "Cost-Effective" }
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Geometric background elements */}
      {/* <div className="geometric-shape w-96 h-96 -top-48 -left-48" />
      <div className="geometric-shape w-32 h-32 -right-8 top-1/3 md:w-64 md:h-64 md:-right-32" />
      <div className="geometric-shape w-80 h-80 bottom-1/4 -left-40" /> */}
      
      {/* Hero Section with Slider */}
      <section id="home" className="pt-16 sm:pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="w-full relative">
          <Carousel 
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              duration: 30,
            }}
            className="w-full"
          >
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  {/* Full-screen background image */}
                  <div 
                    className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
                    style={{
                      backgroundImage: `url(${slide.backgroundImage})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                    
                    {/* Content Container */}
                    <div className="relative z-20 w-full">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                        <div className="max-w-3xl">
                          <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                            <span className="text-yellow-400 font-mono text-xs sm:text-sm tracking-wider uppercase">Comprehensive Accounting Services</span>
                          </div>
                          
                          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 sm:mb-8 text-white">
                            {slide.title}
                            {slide.subtitle && (
                              <>
                                <br />
                                <span className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl font-normal">{slide.subtitle}</span>
                              </>
                            )}
                          </h1>
                          
                          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-8 sm:mb-12 max-w-2xl">
                            {slide.description}
                          </p>
                          
                          <div className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16">
                            <Link to="/contact">
                              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg h-12 sm:h-14 w-full sm:w-auto sm:min-w-[220px] rounded-none">
                                Discover how
                              </Button>
                            </Link>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {slide.features.map((item, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2 sm:space-x-3 text-white/90">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                </div>
                                <span className="font-medium text-sm sm:text-base">{item.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 hidden sm:block">
                      <CarouselPrevious className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white w-10 h-10 sm:w-12 sm:h-12" />
                    </div>
                    <div className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 hidden sm:block">
                      <CarouselNext className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white w-10 h-10 sm:w-12 sm:h-12" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Slide indicators */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-30">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={`w-8 sm:w-12 h-1 rounded-full transition-all duration-300 ${
                    current === index ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-background/20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-primary">
                Our Services
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive accounting solutions tailored for New Zealand businesses
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
            {[
              { icon: Users, title: "Payroll Management", desc: "Accurate payroll processing and KiwiSaver compliance", link: "/services/payroll-management" },
              { icon: FileText, title: "Accounts Receivable", desc: "Invoice management and payment follow-up", link: "/services/accounts-receivable" },
              { icon: CreditCard, title: "Accounts Payable", desc: "Supplier invoice and payment management", link: "/services/accounts-payable" },
              { icon: DollarSign, title: "Credit Control", desc: "Debt monitoring and cash collection", link: "/services/credit-control" },
              { icon: TrendingUp, title: "Payroll Data Entry", desc: "Fast and accurate payroll data processing", link: "/services/payroll-data-entry" },
              { icon: Building, title: "GST Filing", desc: "GST returns and IRD compliance", link: "/services/gst-filing" },
              { icon: Zap, title: "PAYE Services", desc: "PAYE calculations and IRD payments", link: "/services/paye-services" },
              { icon: BookOpen, title: "Income Tax Returns", desc: "Tax return preparation and filing", link: "/services/income-tax-returns" },
              { icon: GraduationCap, title: "Xero Training", desc: "Comprehensive Xero system training", link: "/services/xero-training" }
            ].map((service, index) => (
              <Card key={index} className="gradient-card hover:scale-105 transition-all duration-300 group border-0 h-full">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{service.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-grow">{service.desc}</p>
                  <Link to={service.link} className="mt-auto">
                    <Button variant="outline" size="sm" className="w-full text-xs border-primary/30 text-primary hover:bg-primary/10">
                      View Details
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-primary">
                  About B&B Tax
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At B&B Tax and Accounting Service Limited, we specialize in providing comprehensive 
                accounting services tailored to the needs of small businesses across New Zealand. 
                Our experienced team is dedicated to helping you stay compliant, organized, and focused on growing your business.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional accounting team"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Summary */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-primary">
                Our Professional Team
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet our dedicated team of qualified professionals with years of experience 
              helping New Zealand businesses succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              { name: "Sarah Chen", role: "Senior Accountant", image: "https://images.unsplash.com/photo-1494790108755-2616c898834c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
              { name: "Marcus Rodriguez", role: "Payroll Specialist", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
              { name: "Emma Thompson", role: "Business Advisor", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
              { name: "David Kim", role: "Compliance Manager", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" }
            ].map((member, index) => (
              <Card key={index} className="gradient-card hover:scale-105 transition-all duration-300 border-0 text-center">
                <CardContent className="p-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                  />
                  <h4 className="font-semibold text-foreground">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/team">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold">
                Meet Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Summary */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-primary">
                Industries We Serve
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized accounting solutions across diverse industry sectors in New Zealand
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
            {[
              { icon: Building, title: "Construction", desc: "Project accounting and compliance" },
              { icon: Users, title: "Professional Services", desc: "Consultancy and advisory firms" },
              { icon: Zap, title: "Technology", desc: "Startups and tech companies" },
              { icon: DollarSign, title: "Retail", desc: "Point of sale and inventory management" },
              { icon: FileText, title: "Healthcare", desc: "Medical practice accounting" },
              { icon: TrendingUp, title: "Manufacturing", desc: "Cost accounting and operations" }
            ].map((industry, index) => (
              <Card key={index} className="gradient-card hover:scale-105 transition-all duration-300 group border-0 text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{industry.title}</h4>
                  <p className="text-xs text-muted-foreground">{industry.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/industries">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View All Industries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Summary */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-primary">
                Client Testimonials
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our satisfied clients have to say about our professional accounting services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { name: "Michael Thompson", company: "Thompson Construction", text: "Professional service that saved us countless hours and stress." },
              { name: "Sarah Mitchell", company: "Mitchell Marketing", text: "Exceptional team that helped streamline our financial processes." }
            ].map((testimonial, index) => (
              <Card key={index} className="gradient-card border-0">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/testimonials">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Read All Testimonials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary/10 rounded-3xl p-12 border border-primary/20">
            <MessageSquare className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-primary">
                Ready to Get Started?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your business finances with professional accounting services. 
              Get your free consultation today and discover how we can help your business thrive.
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
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};