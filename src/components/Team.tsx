
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Award } from "lucide-react";

export const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Chief Financial Strategist",
      image: "https://images.unsplash.com/photo-1494790108755-2616c898834c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: "CA, CPA, AI Finance Cert",
      experience: "15+ years",
      specialty: "AI-Powered Tax Optimization",
      color: "text-purple-600"
    },
    {
      name: "Marcus Rodriguez",
      role: "Payroll Innovation Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: "BComm, Xero Master, Tech Lead",
      experience: "12+ years",
      specialty: "Automated Payroll Systems",
      color: "text-blue-600"
    },
    {
      name: "Emma Thompson",
      role: "Digital Transformation Expert",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: "Tech MBA, Process Automation",
      experience: "10+ years",
      specialty: "Business Process Revolution",
      color: "text-green-600"
    },
    {
      name: "David Kim",
      role: "Compliance Intelligence Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: "CA, RegTech Specialist",
      experience: "14+ years",
      specialty: "Real-time Compliance Monitoring",
      color: "text-orange-600"
    }
  ];

  return (
    <section id="team" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Award className="h-6 w-6 text-accent" />
            <span className="text-accent font-mono text-sm tracking-wider uppercase">Elite Team</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-primary">
              Visionary Experts
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the brilliant minds behind our revolutionary platform—industry pioneers 
            who combine deep expertise with cutting-edge innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:scale-105 transition-all duration-300 group border border-border overflow-hidden">
              <CardHeader className="text-center relative">
                <div className="relative mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-2xl object-cover mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute -inset-2 bg-primary/20 rounded-2xl -z-10 opacity-50 group-hover:opacity-80 transition-opacity blur-sm" />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className={`${member.color} font-semibold`}>
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
                    <span className="text-primary font-semibold">Focus:</span> {member.specialty}
                  </p>
                </div>
                <div className="flex justify-center space-x-4 pt-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Mail className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Phone className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Linkedin className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
