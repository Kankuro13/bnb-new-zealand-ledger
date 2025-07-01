
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Senior Accountant & Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616c898834c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: "CA, CPA",
      experience: "15+ years",
      specialty: "Tax Planning & Business Advisory"
    },
    {
      name: "Michael Chen",
      role: "Payroll Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: "BComm, Xero Certified",
      experience: "8+ years",
      specialty: "Payroll Management & Compliance"
    },
    {
      name: "Emma Williams",
      role: "Senior Bookkeeper",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: "Cert IV Bookkeeping",
      experience: "12+ years",
      specialty: "Accounts Receivable & Payable"
    },
    {
      name: "David Thompson",
      role: "Tax Consultant",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: "CA, Tax Agent",
      experience: "10+ years",
      specialty: "GST & Income Tax Returns"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our qualified professionals bring years of experience and expertise to help 
            your business succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-900 font-medium">{member.role}</p>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-sm text-gray-600">
                  <strong>Qualifications:</strong> {member.qualifications}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Experience:</strong> {member.experience}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Specialty:</strong> {member.specialty}
                </p>
                <div className="flex justify-center space-x-4 pt-4">
                  <Mail className="h-5 w-5 text-blue-900 cursor-pointer hover:text-blue-700" />
                  <Phone className="h-5 w-5 text-blue-900 cursor-pointer hover:text-blue-700" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
