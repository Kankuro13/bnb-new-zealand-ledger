
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      business: "Smith Construction Ltd",
      rating: 5,
      text: "B&B Tax and Accounting has been managing our payroll and GST for 3 years. Their attention to detail and timely service is exceptional. Highly recommended!",
      date: "2 months ago"
    },
    {
      name: "Maria Rodriguez",
      business: "Rodriguez Cafe",
      rating: 5,
      text: "Sarah and her team helped us set up our Xero system and provided excellent training. They're always available when we need help. Professional and friendly service.",
      date: "1 month ago"
    },
    {
      name: "Peter Wong",
      business: "Wong Electronics",
      rating: 5,
      text: "Outstanding service! They handle all our accounting needs efficiently, from invoicing to tax returns. It's great to have such reliable support for our growing business.",
      date: "3 weeks ago"
    },
    {
      name: "Lisa Thompson",
      business: "Thompson Dental Practice",
      rating: 5,
      text: "The team at B&B is fantastic. They took over our messy bookkeeping and got everything organized quickly. Their expertise in small business accounting is evident.",
      date: "1 month ago"
    },
    {
      name: "Robert Kim",
      business: "Kim Landscaping",
      rating: 5,
      text: "Professional, reliable, and always responsive. They've saved us time and money with their efficient processes. Couldn't be happier with their service.",
      date: "2 weeks ago"
    },
    {
      name: "Amanda Foster",
      business: "Foster Marketing Agency",
      rating: 5,
      text: "B&B Tax and Accounting provides excellent value. Their knowledge of NZ tax law and small business requirements is impressive. Great communication throughout.",
      date: "1 week ago"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped succeed.
          </p>
          <div className="flex justify-center items-center mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="ml-3 text-lg font-semibold text-gray-900">5.0 out of 5</span>
            <span className="ml-2 text-gray-600">({testimonials.length} reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-blue-900 opacity-50" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-blue-900 font-medium">{testimonial.business}</p>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">
            Ready to join our satisfied clients?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
          >
            Get Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};
