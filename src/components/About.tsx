
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Shield, Clock, Heart } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in all our accounting services"
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Your business data is safe with us, and we operate with complete transparency"
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Consistent, timely service delivery you can depend on"
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "We treat every client like family, providing personalized attention"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About B&B Tax and Accounting</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded with a mission to simplify accounting for New Zealand small businesses, 
              B&B Tax and Accounting Service Limited has been serving the community with 
              dedication and expertise for years.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our team of qualified accountants and bookkeepers understand the unique challenges 
              faced by small business owners. We combine technical expertise with a personal 
              approach to deliver accounting solutions that truly make a difference.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From GST filing to payroll management, we handle the numbers so you can focus 
              on what you do best - running your business.
            </p>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Our modern office"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-blue-900" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
