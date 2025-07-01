
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Rocket, Zap } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/20 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Rocket className="h-6 w-6 text-accent" />
            <span className="text-accent font-mono text-sm tracking-wider uppercase">Launch Your Success</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to Transform?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take the first step toward financial revolution. Our experts are ready to 
            design a custom solution that propels your business into the future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="gradient-card border-0 overflow-hidden">
            <CardHeader className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full" />
              <CardTitle className="text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Start Your Journey
              </CardTitle>
              <p className="text-muted-foreground">Fill out the form and we'll craft a personalized solution for you</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    First Name *
                  </label>
                  <Input placeholder="John" className="bg-secondary/50 border-border focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Last Name *
                  </label>
                  <Input placeholder="Smith" className="bg-secondary/50 border-border focus:border-primary" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">
                  Email Address *
                </label>
                <Input type="email" placeholder="john@company.com" className="bg-secondary/50 border-border focus:border-primary" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">
                  Phone Number
                </label>
                <Input type="tel" placeholder="+64 21 123 4567" className="bg-secondary/50 border-border focus:border-primary" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">
                  Business Name
                </label>
                <Input placeholder="Your Business Name" className="bg-secondary/50 border-border focus:border-primary" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">
                  Primary Interest
                </label>
                <select className="w-full p-3 bg-secondary/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground">
                  <option value="">Select your focus area</option>
                  <option value="ai-payroll">AI-Powered Payroll</option>
                  <option value="smart-gst">Smart GST Automation</option>
                  <option value="tax-optimization">Tax Optimization</option>
                  <option value="digital-transformation">Digital Transformation</option>
                  <option value="xero-mastery">Xero Mastery Training</option>
                  <option value="full-suite">Complete Solution</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">
                  Tell Us Your Vision *
                </label>
                <Textarea 
                  placeholder="Describe your business challenges and what success looks like to you..."
                  className="min-h-[120px] bg-secondary/50 border-border focus:border-primary"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground py-6 text-lg font-semibold rounded-xl">
                <Zap className="mr-2 h-5 w-5" />
                Ignite My Transformation
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="gradient-card border-0 overflow-hidden">
              <CardHeader className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full" />
                <CardTitle className="text-2xl text-foreground">Connect With Us</CardTitle>
                <p className="text-muted-foreground">Multiple ways to reach our innovation team</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">HQ Location</h4>
                    <p className="text-muted-foreground">
                      Level 15, Innovation Tower<br />
                      123 Queen Street<br />
                      Auckland 1010, New Zealand
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Direct Lines</h4>
                    <p className="text-muted-foreground">
                      Main: +64 9 123 4567<br />
                      Mobile: +64 21 987 6543
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Digital Contact</h4>
                    <p className="text-muted-foreground">
                      hello@bnbtax.nz<br />
                      transform@bnbtax.nz
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Availability</h4>
                    <p className="text-muted-foreground">
                      Mon-Fri: 8:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 2:00 PM<br />
                      24/7 Emergency Support
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground overflow-hidden relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full" />
              <CardContent className="p-8 text-center relative z-10">
                <Rocket className="h-12 w-12 mx-auto mb-4 animate-float" />
                <h3 className="text-2xl font-bold mb-4">Free Strategy Session</h3>
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  Get a complimentary 45-minute deep-dive session where we analyze 
                  your current processes and design a custom transformation roadmap.
                </p>
                <Button variant="secondary" className="bg-white/20 text-white hover:bg-white/30 backdrop-blur border-white/30 font-semibold px-8 py-3 rounded-full">
                  Book Your Session
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
