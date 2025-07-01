
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Welcome to{" "}
              <span className="text-blue-900">B&B Tax and Accounting</span>{" "}
              Service Limited
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              We specialize in providing comprehensive accounting services tailored to the needs of 
              small businesses across New Zealand. Our experienced team is dedicated to helping you 
              stay compliant, organized, and focused on growing your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More About Us
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">NZ Tax Compliance Experts</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Small Business Specialists</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Xero Certified Advisors</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Personalized Service</span>
              </div>
            </div>
          </div>
          
          <div className="lg:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Professional accounting services"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
