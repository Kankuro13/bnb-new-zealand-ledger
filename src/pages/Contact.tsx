import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["123 Queen Street", "Auckland 1010", "New Zealand"],
      gradient: "from-amber-600 to-yellow-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+64 9 123 4567", "+64 21 987 6543", "Monday - Friday: 8:30 AM - 5:30 PM"],
      gradient: "from-orange-600 to-amber-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@bnbaccounting.co.nz", "support@bnbaccounting.co.nz", "We respond within 2 hours"],
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:30 AM - 5:30 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
      gradient: "from-amber-700 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <MessageSquare className="h-6 w-6 text-accent" />
            <span className="text-accent font-mono text-sm tracking-wider uppercase">Get In Touch</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contact Us Today
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business finances? Get in touch with our professional team 
            for a free consultation and discover how we can help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Form */}
          <Card className="gradient-card border-0 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <MessageSquare className="h-6 w-6 text-primary mr-3" />
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">First Name</label>
                  <Input placeholder="Your first name" className="bg-background/50" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Last Name</label>
                  <Input placeholder="Your last name" className="bg-background/50" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Email</label>
                <Input type="email" placeholder="your.email@example.com" className="bg-background/50" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Phone</label>
                <Input placeholder="+64 21 123 4567" className="bg-background/50" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Business Name</label>
                <Input placeholder="Your business name (optional)" className="bg-background/50" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Service Interest</label>
                <select className="w-full p-3 border border-border rounded-lg bg-background/50 text-foreground">
                  <option value="">Select a service</option>
                  <option value="payroll">Payroll Management</option>
                  <option value="bookkeeping">Bookkeeping Services</option>
                  <option value="gst">GST Filing & Compliance</option>
                  <option value="tax">Tax Returns</option>
                  <option value="xero">Xero Training</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your accounting needs and how we can help your business..."
                  rows={4}
                  className="bg-background/50"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white py-3 text-lg font-semibold">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="gradient-card hover:scale-105 transition-all duration-300 group border-0 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <Card className="gradient-card border-0 overflow-hidden mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <MapPin className="h-6 w-6 text-primary mr-3" />
              Find Our Office
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">Interactive Map Coming Soon</p>
                <p className="text-sm text-muted-foreground mt-2">123 Queen Street, Auckland 1010, New Zealand</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="gradient-card border-0 text-left">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-2">How quickly can you start helping my business?</h4>
                <p className="text-muted-foreground">We can typically begin working with new clients within 1-2 business days after our initial consultation.</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-0 text-left">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-2">Do you work with businesses of all sizes?</h4>
                <p className="text-muted-foreground">Yes, we specialize in small to medium businesses but welcome clients of all sizes across New Zealand.</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-0 text-left">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-2">What accounting software do you support?</h4>
                <p className="text-muted-foreground">We specialize in Xero but also work with MYOB, QuickBooks, and other popular accounting platforms.</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-0 text-left">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-2">Do you offer free consultations?</h4>
                <p className="text-muted-foreground">Yes, we offer a complimentary 30-minute consultation to discuss your business needs and how we can help.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};