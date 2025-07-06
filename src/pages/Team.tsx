import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, Linkedin, Award } from "lucide-react";

export const TeamPage = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Senior Accountant & Tax Specialist",
      image: "https://images.unsplash.com/photo-1494790108755-2616c898834c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: "CA, CPA, Tax Specialist",
      experience: "15+ years",
      specialty: "Tax Planning & Compliance",
      gradient: "from-amber-600 to-yellow-600"
    },
    {
      name: "Marcus Rodriguez",
      role: "Payroll & HR Consultant",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: "BComm, Payroll Specialist",
      experience: "12+ years",
      specialty: "Payroll Management & KiwiSaver",
      gradient: "from-orange-600 to-amber-600"
    },
    {
      name: "Emma Thompson",
      role: "Business Advisor & Xero Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: "BComm, Xero Certified Advisor",
      experience: "10+ years",
      specialty: "Business Systems & Training",
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      name: "David Kim",
      role: "Compliance & Bookkeeping Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: "CA, Bookkeeping Specialist",
      experience: "14+ years",
      specialty: "GST, PAYE & Compliance",
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
            <Award className="h-6 w-6 text-accent" />
            <span className="text-accent font-mono text-sm tracking-wider uppercase">Our Team</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Professional Experts
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet our dedicated team of qualified professionals who bring years of experience 
            and expertise to help your business succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="gradient-card hover:scale-105 transition-all duration-300 group border-0 overflow-hidden">
              <CardHeader className="text-center relative">
                <div className="relative mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-2xl object-cover mx-auto shadow-xl group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute -inset-2 bg-gradient-to-br ${member.gradient} rounded-2xl -z-10 opacity-30 group-hover:opacity-50 transition-opacity blur-sm`} />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className={`bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent font-semibold`}>
                  {member.role}
                </p>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <span className="text-primary font-semibold">Credentials:</span> {member.qualifications}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-accent font-semibold">Experience:</span> {member.experience}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-primary font-semibold">Specialty:</span> {member.specialty}
                  </p>
                </div>
                <div className="flex justify-center space-x-4 pt-4">
                  <div className={`w-8 h-8 bg-gradient-to-br ${member.gradient} rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform`}>
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div className={`w-8 h-8 bg-gradient-to-br ${member.gradient} rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform`}>
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div className={`w-8 h-8 bg-gradient-to-br ${member.gradient} rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform`}>
                    <Linkedin className="h-4 w-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-card to-secondary rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Join Our Professional Team</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for qualified accounting professionals to join our growing team. 
            If you're passionate about helping businesses succeed, we'd love to hear from you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-primary mb-2">Growth Opportunities</h4>
              <p className="text-muted-foreground">Advance your career with ongoing training and professional development</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-accent mb-2">Collaborative Environment</h4>
              <p className="text-muted-foreground">Work with a supportive team that values expertise and innovation</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-primary mb-2">Competitive Benefits</h4>
              <p className="text-muted-foreground">Enjoy competitive salary packages and comprehensive benefits</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};