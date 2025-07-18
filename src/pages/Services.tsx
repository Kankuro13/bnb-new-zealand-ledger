import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Jumbotron } from "@/components/Jumbotron";
import { Zap, Users, FileText, DollarSign, CreditCard, Building, BookOpen, GraduationCap, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ServicesPage = () => {
  const services = [
    {
      icon: Users,
      title: "Payroll Management",
      description: "Accurate payroll processing, payslip preparation, leave management, and KiwiSaver compliance, ensuring your employees are paid correctly and on time.",
      color: "bg-blue-600",
      link: "/services/payroll-management"
    },
    {
      icon: FileText,
      title: "Accounts Receivable (AR)",
      description: "We manage your invoicing, follow up on outstanding payments, and help maintain a healthy cash flow for your business.",
      color: "bg-green-600",
      link: "/services/accounts-receivable"
    },
    {
      icon: CreditCard,
      title: "Accounts Payable (AP)",
      description: "Efficient handling of supplier invoices, payments, and expense tracking to keep your accounts up to date.",
      color: "bg-purple-600",
      link: "/services/accounts-payable"
    },
    {
      icon: DollarSign,
      title: "Credit Control",
      description: "Proactive monitoring and management of your customer debts to reduce overdue accounts and improve cash collection.",
      color: "bg-red-600",
      link: "/services/credit-control"
    },
    {
      icon: TrendingUp,
      title: "Payroll Data Entry",
      description: "Fast and accurate data entry of payroll information to ensure smooth payroll runs and easy reporting.",
      color: "bg-indigo-600",
      link: "/services/payroll-data-entry"
    },
    {
      icon: Building,
      title: "GST Filing & Compliance",
      description: "Preparation and filing of Goods and Services Tax (GST) returns with IRD, so you never miss a deadline.",
      color: "bg-orange-600",
      link: "/services/gst-filing"
    },
    {
      icon: Zap,
      title: "PAYE Services",
      description: "We calculate and manage your Pay As You Earn (PAYE) obligations, ensuring correct deductions and timely payments to IRD.",
      color: "bg-yellow-600",
      link: "/services/paye-services"
    },
    {
      icon: BookOpen,
      title: "Income Tax Returns",
      description: "Preparation and filing of annual income tax returns for sole traders, partnerships, and companies, maximizing your tax efficiency and compliance.",
      color: "bg-teal-600",
      link: "/services/income-tax-returns"
    },
    {
      icon: GraduationCap,
      title: "Xero Accounting System Training",
      description: "Hands-on training to help you and your team confidently use Xero for everyday bookkeeping, invoicing, payroll, GST returns, and reporting.",
      color: "bg-pink-600",
      link: "/services/xero-training"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Jumbotron */}
      <Jumbotron
        title="Our Services"
        subtitle="Comprehensive Accounting Solutions"
        description="Professional accounting services tailored for New Zealand businesses. From payroll management to tax compliance, we've got you covered."
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        icon={<Sparkles className="h-5 w-5 text-yellow-400" />}
        badge="Professional Services"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="gradient-card hover:scale-105 transition-all duration-300 group border-0 overflow-hidden h-full flex flex-col">
              <CardHeader className="relative">
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <div className={`absolute -top-2 -right-2 w-20 h-20 ${service.color} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500`} />
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="text-center sm:text-left">
                  <Link 
                    to={service.link} 
                    className="mt-auto text-primary hover:text-primary/80 font-medium inline-flex items-center transition-colors"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-primary/10 rounded-full border border-primary/20">
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-primary font-semibold">Professional Excellence Since 2010</span>
            <Sparkles className="h-5 w-5 text-accent animate-pulse" />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};