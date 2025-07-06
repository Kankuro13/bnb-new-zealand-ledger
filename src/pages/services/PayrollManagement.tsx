import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Jumbotron } from "@/components/Jumbotron";
import { Users, CheckCircle, ArrowRight, Clock, DollarSign, Shield, Star, Calculator, TrendingUp, Award, Phone, Mail, Zap, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const PayrollManagementPage = () => {
  const features = [
    "Accurate payroll processing and calculations",
    "Payslip preparation and distribution",
    "Leave management and tracking",
    "KiwiSaver compliance and contributions",
    "Holiday pay calculations",
    "Overtime and penalty rate calculations",
    "PAYE and ACC levy calculations",
    "Employment agreement compliance",
    "Multi-location payroll support",
    "Custom reporting and analytics"
  ];

  const benefits = [
    { icon: Clock, title: "Time Saving", description: "Save 8+ hours per pay period with automated processing", color: "bg-blue-500" },
    { icon: Shield, title: "100% Compliance", description: "Stay compliant with all NZ employment laws and IRD requirements", color: "bg-green-500" },
    { icon: DollarSign, title: "Cost Effective", description: "Reduce payroll costs by up to 60% compared to in-house processing", color: "bg-purple-500" },
    { icon: CheckCircle, title: "99.9% Accuracy", description: "Industry-leading accuracy with professional oversight", color: "bg-orange-500" }
  ];

  const stats = [
    { number: "500+", label: "Businesses Served", icon: Users, color: "text-blue-500" },
    { number: "10,000+", label: "Employees Processed", icon: TrendingUp, color: "text-green-500" },
    { number: "99.9%", label: "Accuracy Rate", icon: Award, color: "text-purple-500" },
    { number: "24hr", label: "Turnaround Time", icon: Clock, color: "text-orange-500" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "From $45",
      period: "per pay run",
      employees: "Up to 5 employees",
      features: ["Basic payroll processing", "Payslips", "PAYE calculations", "Email support"],
      color: "border-blue-500",
      popular: false
    },
    {
      name: "Professional",
      price: "From $85",
      period: "per pay run",
      employees: "Up to 20 employees",
      features: ["Everything in Starter", "Leave management", "KiwiSaver processing", "Custom reports", "Phone support"],
      color: "border-green-500",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      employees: "Unlimited employees",
      features: ["Everything in Professional", "Multi-location support", "Dedicated account manager", "Priority support", "Custom integrations"],
      color: "border-purple-500",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "How quickly can you set up our payroll?",
      answer: "Most businesses can be set up within 2-3 business days. We'll handle all the data migration and ensure a smooth transition."
    },
    {
      question: "Do you handle KiwiSaver contributions?",
      answer: "Yes, we manage all KiwiSaver contributions, including employer and employee contributions, and ensure timely payments to providers."
    },
    {
      question: "What happens if there's an error?",
      answer: "With our 99.9% accuracy rate, errors are rare. However, if one occurs, we'll fix it immediately at no cost and take full responsibility."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "We integrate with most major HR systems, time tracking software, and accounting platforms including Xero, MYOB, and QuickBooks."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Jumbotron */}
      <Jumbotron
        title="Payroll Management"
        subtitle="Professional Payroll Services"
        description="Comprehensive payroll services ensuring your employees are paid accurately and on time, while maintaining full compliance with New Zealand employment laws."
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        icon={<Users className="h-5 w-5 text-yellow-400" />}
        badge="Payroll Services"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-0">
                  <stat.icon className={`h-8 w-8 mx-auto mb-4 ${stat.color}`} />
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Service Details */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">What's Included</h2>
            </div>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Why Choose Us</h2>
            </div>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:shadow-md transition-shadow bg-gradient-to-r from-white to-gray-50">
                  <div className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
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

        {/* Pricing Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your business size and needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.color} border-2 hover:shadow-xl transition-all duration-300 ${plan.popular ? 'scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-2">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                  <div className="text-sm font-medium text-blue-600 mt-2">{plan.employees}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-6 ${plan.popular ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' : ''}`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process */}
        <Card className="mb-20 overflow-hidden border-0 shadow-xl bg-gradient-to-br from-blue-50 to-green-50">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
            <CardTitle className="text-3xl text-center">Our Payroll Process</CardTitle>
            <p className="text-center text-blue-100 mt-2">Streamlined, secure, and accurate every time</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Data Collection", desc: "Secure gathering of employee hours, leave, and payroll data", icon: Calculator, color: "bg-blue-500" },
                { step: "2", title: "Processing", desc: "Automated calculation of wages, taxes, and deductions", icon: Zap, color: "bg-green-500" },
                { step: "3", title: "Quality Review", desc: "Professional review and compliance verification", icon: Shield, color: "bg-purple-500" },
                { step: "4", title: "Distribution", desc: "Secure delivery of payslips and payment processing", icon: Users, color: "bg-orange-500" }
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 ${process.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                    <process.icon className="h-8 w-8" />
                  </div>
                  <div className="text-lg font-bold text-gray-600 mb-2">Step {process.step}</div>
                  <h3 className="font-semibold text-foreground mb-3">{process.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{process.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Get answers to common payroll questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <Card className="mb-20 border-0 shadow-xl bg-gradient-to-br from-yellow-50 to-orange-50">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl text-gray-700 mb-6 italic font-light leading-relaxed">
              "B&B Tax has completely transformed our payroll process. We used to spend entire days calculating wages and worrying about compliance. Now everything is handled professionally and on time, giving us peace of mind and freeing up valuable time to focus on growing our business."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616c898834c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                alt="Sarah Mitchell" 
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="text-left">
                <p className="font-bold text-lg text-foreground">Sarah Mitchell</p>
                <p className="text-muted-foreground">CEO, Mitchell Construction Ltd</p>
                <p className="text-sm text-blue-600 font-medium">25 employees • 3 years with B&B Tax</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="mb-20 border-0 shadow-xl bg-gradient-to-r from-blue-500 to-green-500 text-white">
          <CardContent className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                  Join hundreds of businesses who trust us with their payroll. 
                  Get a free consultation and see how much time and money you can save.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-yellow-300" />
                    <span>Free consultation within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-yellow-300" />
                    <span>No obligation quote</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-yellow-300" />
                    <span>100% satisfaction guarantee</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                  <h4 className="text-2xl font-bold mb-6">Get Your Free Quote</h4>
                  <div className="space-y-4">
                    <Link to="/contact">
                      <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 text-lg">
                        Request Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link to="/services">
                      <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white/10 py-4">
                        View All Services
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-blue-100 mt-4">
                    No setup fees • Cancel anytime • 30-day money-back guarantee
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};
