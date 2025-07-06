import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GraduationCap, CheckCircle, ArrowRight, Users, BookOpen, Monitor, Star } from "lucide-react";
import { Link } from "react-router-dom";

export const XeroTrainingPage = () => {
  const modules = [
    "Xero Setup and Company File Creation",
    "Chart of Accounts Configuration", 
    "Customer and Supplier Management",
    "Invoice Creation and Management",
    "Bank Reconciliation Process",
    "Expense Claims and Bill Management",
    "Payroll Setup and Processing",
    "GST Returns and Reporting",
    "Financial Reporting and Analysis",
    "Inventory Management (if applicable)"
  ];

  const trainingOptions = [
    { 
      icon: Users, 
      title: "Group Training", 
      description: "Cost-effective training for teams of 3-8 people",
      duration: "Half or full day sessions",
      price: "From $150 per person"
    },
    { 
      icon: Monitor, 
      title: "One-on-One Training", 
      description: "Personalized training tailored to your specific needs",
      duration: "2-4 hour sessions",
      price: "From $180 per hour"
    },
    { 
      icon: BookOpen, 
      title: "Online Training", 
      description: "Flexible online sessions with screen sharing",
      duration: "1-2 hour sessions",
      price: "From $120 per hour"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <GraduationCap className="h-6 w-6 text-accent" />
              <span className="text-accent font-mono text-sm tracking-wider uppercase">Training Services</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-primary">
                Xero Training
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Master Xero accounting software with comprehensive training programs designed to boost your 
              team's confidence and efficiency in managing your business finances.
            </p>
          </div>

          {/* Training Modules */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((module, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{module}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Training Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Training Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trainingOptions.map((option, index) => (
                <Card key={index} className="gradient-card hover:scale-105 transition-all duration-300 group border-0">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <option.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground">{option.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm text-primary font-medium">{option.duration}</p>
                      <p className="text-lg font-bold text-accent">{option.price}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Our Training */}
          <Card className="gradient-card border-0 mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Why Choose Our Xero Training?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "Certified Trainers", desc: "Xero certified advisors with real-world experience" },
                  { title: "Hands-On Learning", desc: "Practice with your own data in a safe environment" },
                  { title: "Ongoing Support", desc: "30 days of follow-up support after training" },
                  { title: "Customized Content", desc: "Training tailored to your industry and needs" }
                ].map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Prerequisites */}
          <Card className="gradient-card border-0 mb-16">
            <CardHeader>
              <CardTitle className="text-xl">Training Prerequisites</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-4">What You'll Need:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Computer with internet access</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Xero subscription (trial available)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Basic computer skills</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Who Should Attend:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Business owners</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Office managers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Bookkeeping staff</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial */}
          <Card className="gradient-card border-0 mb-16">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-lg text-muted-foreground mb-4 italic">
                "The Xero training was incredibly valuable. Our team now handles all our bookkeeping in-house with confidence. The trainer was patient and knowledgeable."
              </p>
              <div>
                <p className="font-semibold text-foreground">Lisa Roberts</p>
                <p className="text-sm text-muted-foreground">Roberts Property Management</p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-primary/10 rounded-3xl p-12 border border-primary/20">
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-primary">
                  Ready to Master Xero?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Invest in your team's skills and take control of your business finances. 
                Book your Xero training session today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold">
                    Book Training Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-full text-lg">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
