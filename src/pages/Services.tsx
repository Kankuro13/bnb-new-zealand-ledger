import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Zap, Users, FileText, DollarSign, CreditCard, Building, BookOpen, GraduationCap, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ServicesPage = () => {
  const services = [
    {
      icon: Users,
      title: "Payroll Management",
      description: "Accurate payroll processing, payslip preparation, leave management, and KiwiSaver compliance, ensuring your employees are paid correctly and on time.",
      gradient: "from-amber-600 to-yellow-600",
      link: "/services/payroll-management"
    },
    {
      icon: FileText,
      title: "Accounts Receivable (AR)",
      description: "We manage your invoicing, follow up on outstanding payments, and help maintain a healthy cash flow for your business.",
      gradient: "from-orange-600 to-amber-600",
      link: "/services/accounts-receivable"
    },
    {
      icon: CreditCard,
      title: "Accounts Payable (AP)",
      description: "Efficient handling of supplier invoices, payments, and expense tracking to keep your accounts up to date.",
      gradient: "from-yellow-600 to-orange-600",
      link: "/services/accounts-payable"
    },
    {
      icon: DollarSign,
      title: "Credit Control",
      description: "Proactive monitoring and management of your customer debts to reduce overdue accounts and improve cash collection.",
      gradient: "from-amber-700 to-orange-600",
      link: "/services/credit-control"
    },
    {
      icon: TrendingUp,
      title: "Payroll Data Entry",
      description: "Fast and accurate data entry of payroll information to ensure smooth payroll runs and easy reporting.",
      gradient: "from-orange-700 to-amber-700",
      link: "/services/payroll-data-entry"
    },
    {
      icon: Building,
      title: "GST Filing & Compliance",
      description: "Preparation and filing of Goods and Services Tax (GST) returns with IRD, so you never miss a deadline.",
      gradient: "from-yellow-700 to-orange-700",
      link: "/services/gst-filing"
    },
    {
      icon: Zap,
      title: "PAYE Services",
      description: "We calculate and manage your Pay As You Earn (PAYE) obligations, ensuring correct deductions and timely payments to IRD.",
      gradient: "from-amber-600 to-yellow-700",
      link: "/services/paye-services"
    },
    {
      icon: BookOpen,
      title: "Income Tax Returns",
      description: "Preparation and filing of annual income tax returns for sole traders, partnerships, and companies, maximizing your tax efficiency and compliance.",
      gradient: "from-orange-600 to-amber-600",
      link: "/services/income-tax-returns"
    },
    {
      icon: GraduationCap,
      title: "Xero Accounting System Training",
      description: "Hands-on training to help you and your team confidently use Xero for everyday bookkeeping, invoicing, payroll, GST returns, and reporting.",
      gradient: "from-yellow-600 to-amber-600",
      link: "/services/xero-training"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Zap className="h-6 w-6 text-accent" />
            <span className="text-accent font-mono text-sm tracking-wider uppercase">Our Services</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive accounting services tailored to the needs of small businesses across New Zealand. 
            Our experienced team helps you stay compliant, organized, and focused on growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="gradient-card hover:scale-105 transition-all duration-300 group border-0 overflow-hidden h-full flex flex-col">
              <CardHeader className="relative">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500`} />
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors mb-6 flex-grow">
                  {service.description}
                </p>
                <Link to={service.link} className="mt-auto">
                  <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-primary font-semibold">Professional Excellence Since 2010</span>
            <Sparkles className="h-5 w-5 text-accent animate-pulse" />
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};