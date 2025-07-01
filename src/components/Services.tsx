
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calculator, FileText, DollarSign, Users, CreditCard, Building, BookOpen, GraduationCap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Payroll Management",
      description: "Accurate payroll processing, payslip preparation, leave management, and KiwiSaver compliance, ensuring your employees are paid correctly and on time."
    },
    {
      icon: FileText,
      title: "Accounts Receivable (AR)",
      description: "We manage your invoicing, follow up on outstanding payments, and help maintain a healthy cash flow."
    },
    {
      icon: CreditCard,
      title: "Accounts Payable (AP)",
      description: "Efficient handling of supplier invoices, payments, and expense tracking to keep your accounts up to date."
    },
    {
      icon: DollarSign,
      title: "Credit Control",
      description: "Proactive monitoring and management of your customer debts to reduce overdue accounts and improve cash collection."
    },
    {
      icon: Calculator,
      title: "Payroll Data Entry",
      description: "Fast and accurate data entry of payroll information to ensure smooth payroll runs and easy reporting."
    },
    {
      icon: Building,
      title: "GST Filing & Compliance",
      description: "Preparation and filing of Goods and Services Tax (GST) returns with IRD, so you never miss a deadline."
    },
    {
      icon: FileText,
      title: "PAYE Services",
      description: "We calculate and manage your Pay As You Earn (PAYE) obligations, ensuring correct deductions and timely payments to IRD."
    },
    {
      icon: BookOpen,
      title: "Income Tax Returns",
      description: "Preparation and filing of annual income tax returns for sole traders, partnerships, and companies, maximizing your tax efficiency and compliance."
    },
    {
      icon: GraduationCap,
      title: "Xero Accounting System Training",
      description: "Hands-on training to help you and your team confidently use Xero for everyday bookkeeping, invoicing, payroll, GST returns, and reporting."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive accounting solutions designed to keep your business compliant, 
            organized, and growing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <service.icon className="h-6 w-6 text-blue-900" />
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                </div>
                <CardTitle className="text-lg text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
