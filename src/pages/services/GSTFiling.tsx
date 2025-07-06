import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Jumbotron } from "@/components/Jumbotron";
import { Building, CheckCircle, ArrowRight, Clock, Shield, TrendingUp, Star, FileText, Calculator, Users, Phone, Mail, MapPin, HelpCircle, PlusCircle, MinusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const GSTFilingPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const stats = [
    { number: "500+", label: "GST Returns Filed", icon: FileText },
    { number: "99.9%", label: "On-Time Filing Rate", icon: Clock },
    { number: "$2M+", label: "Credits Recovered", icon: Calculator },
    { number: "200+", label: "Happy Clients", icon: Users }
  ];

  const pricingPlans = [
    {
      name: "Monthly GST",
      price: "$150",
      period: "per month",
      features: [
        "Monthly GST return preparation",
        "IRD compliance check",
        "Basic input tax optimization",
        "Email support",
        "Filing deadline reminders"
      ],
      popular: false
    },
    {
      name: "Quarterly GST Plus",
      price: "$400",
      period: "per quarter",
      features: [
        "Quarterly GST return preparation",
        "Advanced input tax credit optimization",
        "GST audit support",
        "Priority phone support",
        "Cash flow optimization advice",
        "Free GST health check"
      ],
      popular: true
    },
    {
      name: "Annual GST Premium",
      price: "$1,400",
      period: "per year",
      features: [
        "Full year GST management",
        "Quarterly business reviews",
        "Advanced reporting & analytics",
        "Dedicated account manager",
        "IRD representation",
        "Free Xero integration"
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We review your business structure, transactions, and GST requirements to understand your specific needs."
    },
    {
      step: 2,
      title: "System Setup",
      description: "Integration with your accounting software and establishment of GST filing procedures and schedules."
    },
    {
      step: 3,
      title: "Data Collection",
      description: "Regular collection and review of sales, purchase, and expense data for accurate GST calculations."
    },
    {
      step: 4,
      title: "Return Preparation",
      description: "Professional preparation of GST returns with thorough review and optimization of input tax credits."
    },
    {
      step: 5,
      title: "Filing & Follow-up",
      description: "Timely filing with IRD and ongoing monitoring to ensure compliance and optimize cash flow."
    }
  ];

  const faqs = [
    {
      question: "How often do I need to file GST returns?",
      answer: "Most businesses file GST returns monthly, but some smaller businesses may qualify for bi-monthly or quarterly filing. We'll determine the best filing frequency for your business based on your turnover and cash flow needs."
    },
    {
      question: "What happens if I miss a GST filing deadline?",
      answer: "Missing GST deadlines can result in penalties and interest charges from IRD. Our service includes deadline monitoring and automatic reminders to ensure you never miss a filing date."
    },
    {
      question: "Can you help recover input tax credits I've missed?",
      answer: "Yes, we can review your past transactions and help you claim input tax credits you may have overlooked. This often results in significant cash flow improvements for businesses."
    },
    {
      question: "Do you provide GST audit support?",
      answer: "Absolutely. Our team can represent you during IRD audits and provide all necessary documentation and support to ensure a smooth audit process."
    },
    {
      question: "How do you integrate with my accounting software?",
      answer: "We work with all major accounting platforms including Xero, MYOB, and QuickBooks. Our team can set up direct integrations or work with exported data files."
    }
  ];

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
      
      {/* Jumbotron */}
      <Jumbotron
        title="GST Filing & Compliance"
        subtitle="Professional GST return preparation and filing services ensuring full compliance with IRD requirements while maximizing your input tax credits and cash flow."
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Service Details */}
          <div>
            <h2 className="text-3xl font-bold mb-6">What's Included</h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">GST Filing Packages</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Choose the GST filing package that best fits your business needs and filing frequency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 shadow-lg scale-105' : 'border-slate-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-slate-600">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our GST Filing Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our streamlined 5-step process ensures accurate, timely GST filing and maximum compliance.
            </p>
          </div>
          
          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Common questions about our GST filing and compliance services.
            </p>
          </div>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-slate-200">
                <CardHeader 
                  className="cursor-pointer hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-medium">{faq.question}</CardTitle>
                    {openFAQ === index ? (
                      <MinusCircle className="h-5 w-5 text-slate-400" />
                    ) : (
                      <PlusCircle className="h-5 w-5 text-slate-400" />
                    )}
                  </div>
                </CardHeader>
                {openFAQ === index && (
                  <CardContent>
                    <p className="text-slate-600">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mb-16 bg-slate-50 rounded-2xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-slate-700 italic mb-6">
              "NZ Accountants have transformed our GST filing process. We went from struggling with deadlines to having everything automated. They recovered over $15,000 in input tax credits we had missed!"
            </blockquote>
            <div className="font-semibold text-slate-900">Sarah Mitchell</div>
            <div className="text-slate-600">Finance Manager, Mitchell & Co</div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-blue-600 text-white rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your GST Filing?</h2>
              <p className="text-blue-100 mb-6">
                Let our experts handle your GST returns while you focus on growing your business. 
                Contact us today for a free consultation and GST health check.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-200" />
                  <span>+64 9 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-200" />
                  <span>gst@nzaccountants.co.nz</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-200" />
                  <span>Auckland, Wellington, Christchurch</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <Button size="lg" variant="secondary" className="mb-4">
                Get Free Consultation
              </Button>
              <p className="text-blue-100 text-sm">
                No obligation • 30-minute consultation • Expert advice
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};
