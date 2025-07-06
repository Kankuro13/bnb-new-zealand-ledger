import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Jumbotron } from "@/components/Jumbotron";
import { FileText, CheckCircle, ArrowRight, Star, DollarSign, TrendingUp, Clock, Users, Phone, Mail, MapPin, HelpCircle, PlusCircle, MinusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const AccountsReceivablePage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const stats = [
    { number: "85%", label: "Average Collection Rate", icon: TrendingUp },
    { number: "30%", label: "Faster Payment Collection", icon: Clock },
    { number: "$500K+", label: "Recovered for Clients", icon: DollarSign },
    { number: "150+", label: "Businesses Helped", icon: Users }
  ];

  const pricingPlans = [
    {
      name: "Basic AR",
      price: "$200",
      period: "per month",
      features: [
        "Invoice creation & management",
        "Payment tracking & reminders",
        "Basic reporting",
        "Email support",
        "Up to 50 customers"
      ],
      popular: false
    },
    {
      name: "Professional AR",
      price: "$400",
      period: "per month",
      features: [
        "Everything in Basic",
        "Advanced collection strategies",
        "Credit assessment & management",
        "Detailed cash flow reports",
        "Priority phone support",
        "Up to 200 customers"
      ],
      popular: true
    },
    {
      name: "Enterprise AR",
      price: "$750",
      period: "per month",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom collection workflows",
        "Legal support & representation",
        "Advanced analytics & insights",
        "Unlimited customers"
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: 1,
      title: "Account Analysis",
      description: "We conduct a thorough review of your current accounts receivable position and identify improvement opportunities."
    },
    {
      step: 2,
      title: "System Setup",
      description: "Implementation of streamlined invoicing processes and payment tracking systems tailored to your business."
    },
    {
      step: 3,
      title: "Collection Strategy",
      description: "Development of customized collection procedures and communication templates for different customer segments."
    },
    {
      step: 4,
      title: "Active Management",
      description: "Ongoing monitoring and follow-up on outstanding invoices with professional collection efforts."
    },
    {
      step: 5,
      title: "Reporting & Optimization",
      description: "Regular reporting on collection performance and continuous optimization of processes for better results."
    }
  ];

  const faqs = [
    {
      question: "How quickly can you improve our collection rates?",
      answer: "Most clients see improvements within the first month. Typically, we help businesses reduce their average collection time by 15-30 days and increase collection rates by 20-40%."
    },
    {
      question: "Do you handle difficult or overdue accounts?",
      answer: "Yes, we specialize in managing challenging accounts. Our professional approach and proven collection strategies help recover funds while maintaining customer relationships."
    },
    {
      question: "Can you integrate with our existing accounting system?",
      answer: "Absolutely. We work with all major accounting platforms including Xero, MYOB, QuickBooks, and can integrate with custom systems to streamline your AR processes."
    },
    {
      question: "What happens if a customer disputes an invoice?",
      answer: "We handle all customer inquiries and disputes professionally, working to resolve issues quickly while protecting your business interests and maintaining customer goodwill."
    },
    {
      question: "Do you provide legal support for debt collection?",
      answer: "Our Enterprise package includes legal support and representation for difficult collection cases, including formal debt recovery procedures when necessary."
    }
  ];

  const features = [
    "Invoice creation and management",
    "Customer payment tracking",
    "Outstanding payment follow-up",
    "Credit management and assessment",
    "Payment reminders and notices",
    "Debt collection support",
    "Cash flow improvement strategies",
    "Customer account reconciliation"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Jumbotron */}
      <Jumbotron
        title="Accounts Receivable Management"
        subtitle="Professional invoice management and payment collection services to improve your cash flow and reduce outstanding debts while maintaining strong customer relationships."
        backgroundImage="https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                    <IconComponent className="h-6 w-6 text-purple-600" />
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
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-slate-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
            <div className="space-y-6">
              {[
                { title: "Faster Collections", description: "Reduce payment cycles by 15-30 days on average" },
                { title: "Improved Cash Flow", description: "Better working capital management and predictable income" },
                { title: "Customer Retention", description: "Professional approach maintains good customer relationships" },
                { title: "Time Savings", description: "Free up your time to focus on core business activities" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-100">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AR Management Packages</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Choose the accounts receivable package that fits your business size and collection needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-purple-500 shadow-lg scale-105' : 'border-slate-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-purple-600">{plan.price}</span>
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
                  <Button className={`w-full ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}>
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
            <h2 className="text-3xl font-bold mb-4">Our AR Management Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our systematic 5-step approach to optimize your accounts receivable and improve collection rates.
            </p>
          </div>
          
          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full font-bold">
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
              Common questions about our accounts receivable management services.
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
              "Our cash flow improved dramatically after partnering with NZ Accountants for AR management. They helped us collect over $50,000 in overdue invoices within the first three months."
            </blockquote>
            <div className="font-semibold text-slate-900">David Thompson</div>
            <div className="text-slate-600">Managing Director, Thompson Construction</div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-purple-600 text-white rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Cash Flow?</h2>
              <p className="text-purple-100 mb-6">
                Let our AR specialists help you collect payments faster and maintain strong customer relationships. 
                Contact us today for a free accounts receivable assessment.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-200" />
                  <span>+64 9 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-200" />
                  <span>ar@nzaccountants.co.nz</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-200" />
                  <span>Nationwide AR Management Services</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <Button size="lg" variant="secondary" className="mb-4">
                Get Free AR Assessment
              </Button>
              <p className="text-purple-100 text-sm">
                Free consultation • Custom strategy • Improved collections
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};
