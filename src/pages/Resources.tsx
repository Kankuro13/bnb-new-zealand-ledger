import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Download, FileText, Calculator, BookOpen, ClipboardList, TrendingUp, Shield, Zap, Filter } from "lucide-react";
import { useState } from "react";

export const ResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Tax & Compliance", "Templates", "Guides", "Training"];

  const resources = [
    {
      title: "Small Business Tax Guide 2024",
      description: "Comprehensive guide covering all tax obligations and deadlines for small businesses in New Zealand. Includes GST, PAYE, and income tax requirements.",
      icon: FileText,
      fileType: "PDF",
      fileSize: "2.5 MB",
      category: "Tax & Compliance",
      color: "text-blue-600"
    },
    {
      title: "GST Calculator Template",
      description: "Excel template to help calculate and track your GST obligations. Includes automated formulas and quarterly return summaries for easy compliance.",
      icon: Calculator,
      fileType: "XLSX",
      fileSize: "1.2 MB",
      category: "Templates",
      color: "text-green-600"
    },
    {
      title: "Payroll Checklist & Templates",
      description: "Complete payroll processing checklist with employee record templates, timesheet forms, and compliance tracking worksheets for small businesses.",
      icon: ClipboardList,
      fileType: "ZIP",
      fileSize: "3.8 MB",
      category: "Templates",
      color: "text-purple-600"
    },
    {
      title: "Annual Tax Calendar 2024",
      description: "Important dates and deadlines for all New Zealand tax obligations. Never miss a filing deadline with this comprehensive annual tax calendar.",
      icon: BookOpen,
      fileType: "PDF",
      fileSize: "1.8 MB",
      category: "Tax & Compliance",
      color: "text-orange-600"
    },
    {
      title: "Financial KPI Dashboard",
      description: "Excel dashboard template to track key financial performance indicators. Monitor cash flow, profit margins, and business growth metrics easily.",
      icon: TrendingUp,
      fileType: "XLSX",
      fileSize: "2.1 MB",
      category: "Templates",
      color: "text-red-600"
    },
    {
      title: "Expense Tracking Workbook",
      description: "Organized expense tracking system with categories, receipt logging, and automated monthly summaries. Perfect for small business expense management.",
      icon: Shield,
      fileType: "XLSX",
      fileSize: "1.5 MB",
      category: "Templates",
      color: "text-indigo-600"
    },
    {
      title: "Xero Setup & Training Guide",
      description: "Step-by-step guide to setting up Xero accounting software with best practices, chart of accounts setup, and essential reporting configuration.",
      icon: Zap,
      fileType: "PDF",
      fileSize: "4.2 MB",
      category: "Training",
      color: "text-amber-600"
    },
    {
      title: "Business Registration Kit",
      description: "Complete package for new business registration including company formation documents, IRD number application, and initial compliance requirements.",
      icon: FileText,
      fileType: "ZIP",
      fileSize: "5.1 MB",
      category: "Guides",
      color: "text-teal-600"
    }
  ];

  const filteredResources = selectedCategory === "All" 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Download className="h-6 w-6 text-accent" />
              <span className="text-accent font-mono text-sm tracking-wider uppercase">Free Resources</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Downloadable Resources
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Access our collection of free accounting templates, guides, and tools designed to help 
              New Zealand small businesses manage their finances more effectively and stay compliant.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredResources.map((resource, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border bg-card">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 bg-card border-2 border-border rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <resource.icon className={`h-7 w-7 ${resource.color}`} />
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                        {resource.fileType}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">{resource.fileSize}</p>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full mt-1 inline-block">
                        {resource.category}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {resource.description}
                  </p>
                  <Button 
                    className={`w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300`}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download {resource.fileType}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="bg-card border border-border rounded-2xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Need Personalized Help?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                While our free resources are comprehensive, every business is unique. Get personalized 
                accounting solutions tailored specifically to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full">
                  Request Proposal
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Download Terms</h3>
              <div className="text-sm text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                <p className="mb-4">
                  All resources are provided free of charge for educational and business use. These templates and guides 
                  are designed to assist with your accounting needs but should not replace professional accounting advice.
                </p>
                <p>
                  For complex tax situations or specific compliance questions, we recommend consulting with our qualified 
                  accounting professionals. Contact us for personalized advice tailored to your business circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
