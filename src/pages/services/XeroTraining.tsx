import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Jumbotron } from "@/components/Jumbotron";
import { GraduationCap, CheckCircle, ArrowRight, Users, BookOpen, Monitor, Star, Clock, Award, TrendingUp, Phone, Mail, MapPin, HelpCircle, PlusCircle, MinusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const XeroTrainingPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const stats = [
    { number: "500+", label: "People Trained", icon: Users },
    { number: "95%", label: "Satisfaction Rate", icon: Award },
    { number: "4.8/5", label: "Average Rating", icon: Star },
    { number: "24hrs", label: "Support Included", icon: Clock }
  ];

  const pricingPlans = [
    {
      name: "Xero Basics",
      price: "$120",
      period: "per hour",
      features: [
        "1-on-1 personalized training",
        "Basic Xero setup",
        "Invoice and bill creation",
        "Bank reconciliation basics",
        "Basic reporting",
        "Email support for 1 week"
      ],
      popular: false
    },
    {
      name: "Xero Mastery",
      price: "$450",
      period: "full day",
      features: [
        "Group training (up to 6 people)",
        "Complete Xero setup & configuration",
        "Advanced features training",
        "Custom chart of accounts",
        "Payroll setup included",
        "3 months email support",
        "Training materials included"
      ],
      popular: true
    },
    {
      name: "Xero Enterprise",
      price: "$850",
      period: "2-day course",
      features: [
        "Comprehensive enterprise training",
        "Multi-currency setup",
        "Advanced reporting & analytics",
        "Integration with other systems",
        "Team training (up to 12 people)",
        "6 months ongoing support",
        "Certification included"
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: 1,
      title: "Needs Assessment",
      description: "We evaluate your business requirements and current Xero knowledge to customize the training program."
    },
    {
      step: 2,
      title: "Training Plan",
      description: "Development of a personalized training schedule that fits your team's availability and learning pace."
    },
    {
      step: 3,
      title: "Hands-on Training",
      description: "Interactive training sessions using your actual business data for real-world learning experience."
    },
    {
      step: 4,
      title: "Practice & Review",
      description: "Guided practice sessions with immediate feedback to ensure confidence in using Xero features."
    },
    {
      step: 5,
      title: "Ongoing Support",
      description: "Continued support and guidance to help you maximize Xero's potential for your business."
    }
  ];

  const faqs = [
    {
      question: "Do I need any prior accounting knowledge for Xero training?",
      answer: "No prior accounting knowledge is required. Our training is designed for users of all skill levels, from complete beginners to experienced bookkeepers looking to transition to Xero."
    },
    {
      question: "Can you train my entire team at once?",
      answer: "Absolutely! We offer group training sessions for teams of up to 12 people. This is often more cost-effective and ensures everyone learns the same processes and best practices."
    },
    {
      question: "What if I need additional support after training?",
      answer: "All our training packages include follow-up support. Depending on your package, this ranges from 1 week to 6 months of email support to help you with any questions."
    },
    {
      question: "Can you help migrate our data from our current system to Xero?",
      answer: "Yes, we provide data migration services as part of our setup process. We can help transfer your customer, supplier, and transaction data from most accounting systems."
    },
    {
      question: "Do you provide training materials?",
      answer: "Yes, all participants receive comprehensive training materials including step-by-step guides, video tutorials, and quick reference cards to support ongoing learning."
    }
  ];

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
      
      {/* Jumbotron */}
      <Jumbotron
        title="Xero Training & Certification"
        subtitle="Master Xero accounting software with comprehensive training programs designed to boost your team's confidence and efficiency in managing your business finances."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                    <IconComponent className="h-6 w-6 text-green-600" />
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
        {/* Training Modules */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What You'll Learn</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive Xero training covering all essential features for effective business accounting.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{module}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Training Options */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Training Options</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Choose the training format that best suits your schedule and learning preferences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-slate-200">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <option.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-slate-600">{option.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm text-green-600 font-medium">{option.duration}</p>
                    <p className="text-lg font-bold text-slate-900">{option.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Training Packages</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive training packages designed for different skill levels and business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-green-500 shadow-lg scale-105' : 'border-slate-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-green-600">{plan.price}</span>
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
                  <Button className={`w-full ${plan.popular ? 'bg-green-600 hover:bg-green-700' : ''}`}>
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
            <h2 className="text-3xl font-bold mb-4">Our Training Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our structured 5-step approach ensures effective learning and practical application.
            </p>
          </div>
          
          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full font-bold">
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
              Common questions about our Xero training programs.
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
              "The Xero training was incredibly valuable. Our team now handles all our bookkeeping in-house with confidence. The trainer was patient and knowledgeable, and the ongoing support has been fantastic."
            </blockquote>
            <div className="font-semibold text-slate-900">Lisa Roberts</div>
            <div className="text-slate-600">Roberts Property Management</div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-green-600 text-white rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Master Xero?</h2>
              <p className="text-green-100 mb-6">
                Invest in your team's skills and take control of your business finances. 
                Book your customized Xero training session today and transform how you manage your accounts.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-200" />
                  <span>+64 9 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-200" />
                  <span>training@nzaccountants.co.nz</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-200" />
                  <span>On-site & Online Training Available</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <Button size="lg" variant="secondary" className="mb-4">
                Book Training Session
              </Button>
              <p className="text-green-100 text-sm">
                Free consultation • Custom training plan • Ongoing support
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};
