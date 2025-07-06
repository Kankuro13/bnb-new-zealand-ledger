import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Building, CheckCircle, ArrowRight, Clock, Shield, TrendingUp, Star } from "lucide-react";
import { Link } from "react-router-dom";

export const GSTFilingPage = () => {
  const features = [
    "Monthly, bi-monthly, or quarterly GST returns",
    "Accurate GST calculations and reporting",
    "IRD compliance and deadline management",
    "GST registration and deregistration assistance",
    "Input tax credit optimization",
    "Zero-rated supplies management",
    "Exempt supplies handling",
    "GST audit support and representation"
  ];

  const benefits = [
    { icon: Clock, title: "Never Miss Deadlines", description: "Automatic filing ensures you meet all IRD deadlines" },
    { icon: Shield, title: "IRD Compliance", description: "Full compliance with all GST regulations and requirements" },
    { icon: TrendingUp, title: "Maximize Credits", description: "Optimize input tax credits to improve cash flow" },
    { icon: CheckCircle, title: "Error-Free Returns", description: "Professional review eliminates costly mistakes" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Building className="h-6 w-6 text-accent" />
              <span className="text-accent font-mono text-sm tracking-wider uppercase">GST Services</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                GST Filing & Compliance
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional GST return preparation and filing services ensuring full compliance with IRD requirements 
              while maximizing your input tax credits and cash flow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Service Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6">GST Services Include</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GST Rates Info */}
          <Card className="gradient-card border-0 mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">New Zealand GST Rates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">15%</div>
                  <h3 className="font-semibold text-foreground mb-2">Standard Rate</h3>
                  <p className="text-sm text-muted-foreground">Most goods and services</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold text-accent mb-2">0%</div>
                  <h3 className="font-semibold text-foreground mb-2">Zero-Rated</h3>
                  <p className="text-sm text-muted-foreground">Exports and specific supplies</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold text-muted-foreground mb-2">Exempt</div>
                  <h3 className="font-semibold text-foreground mb-2">No GST</h3>
                  <p className="text-sm text-muted-foreground">Financial services, rentals</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Filing Deadlines */}
          <Card className="gradient-card border-0 mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">GST Filing Periods & Deadlines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { period: "Monthly", deadline: "28th of following month", suitable: "Taxable supplies > $500k annually" },
                  { period: "Bi-Monthly", deadline: "28th of second following month", suitable: "Taxable supplies $500k - $24m annually" },
                  { period: "Quarterly", deadline: "28th of month following quarter", suitable: "Most small to medium businesses" }
                ].map((filing, index) => (
                  <div key={index} className="text-center p-6 bg-white/5 rounded-xl">
                    <h3 className="font-semibold text-foreground mb-2">{filing.period}</h3>
                    <p className="text-primary font-medium mb-2">{filing.deadline}</p>
                    <p className="text-sm text-muted-foreground">{filing.suitable}</p>
                  </div>
                ))}
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
                "Never missed a GST deadline since working with B&B Tax. Their expertise has saved us from penalties and improved our cash flow."
              </p>
              <div>
                <p className="font-semibold text-foreground">Michael Chen</p>
                <p className="text-sm text-muted-foreground">Chen Electronics Ltd</p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Ensure GST Compliance Today
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't risk penalties or missed deadlines. Let our GST experts handle your returns 
                while you focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white px-8 py-4 rounded-full text-lg font-semibold">
                    Get Free Consultation
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
