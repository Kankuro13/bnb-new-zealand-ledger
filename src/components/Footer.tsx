import { MapPin, Phone, Mail, Rocket, Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  const partners = [
    { name: "Xero", logo: "https://cdn.worldvectorlogo.com/logos/xero-2.svg" },
    { name: "MYOB", logo: "https://cdn.worldvectorlogo.com/logos/myob-1.svg" },
    { name: "QuickBooks", logo: "https://cdn.worldvectorlogo.com/logos/quickbooks-1.svg" },
    { name: "IRD", logo: "https://www.ird.govt.nz/-/media/project/ir/home/images/logos/ird-logo-colour.svg" },
    { name: "NZICA", logo: "https://www.charteredaccountantsanz.com/-/media/caa/images/logos/ca-anz-logo-stacked.svg" },
    { name: "CPA Australia", logo: "https://cdn.worldvectorlogo.com/logos/cpa-australia.svg" },
    { name: "ASB Bank", logo: "https://cdn.worldvectorlogo.com/logos/asb-bank.svg" },
    { name: "ANZ Bank", logo: "https://cdn.worldvectorlogo.com/logos/anz-2.svg" },
    { name: "Westpac", logo: "https://cdn.worldvectorlogo.com/logos/westpac-1.svg" },
    { name: "BNZ", logo: "https://cdn.worldvectorlogo.com/logos/bank-of-new-zealand-bnz.svg" }
  ];

  return (
    <>
      {/* Valued Partners Section */}
      <section className="bg-slate-50 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Valued Partners</h2>
            <p className="text-slate-600">Trusted by industry leaders and integrated with the best platforms</p>
          </div>
          
          {/* Marquee Container */}
          <div className="relative">
            <div className="flex animate-marquee space-x-12 items-center">
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow min-w-[160px] h-20 group">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="max-h-10 max-w-[130px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onLoad={(e) => {
                      // Hide fallback text when image loads successfully
                      const textElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (textElement) textElement.style.display = 'none';
                    }}
                    onError={(e) => {
                      // Show fallback text if image fails to load
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) nextElement.style.display = 'flex';
                    }}
                  />
                  <div className="text-center flex items-center justify-center w-full h-full">
                    <div className="text-sm font-semibold text-slate-700">{partner.name}</div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow min-w-[160px] h-20 group">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="max-h-10 max-w-[130px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onLoad={(e) => {
                      // Hide fallback text when image loads successfully
                      const textElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (textElement) textElement.style.display = 'none';
                    }}
                    onError={(e) => {
                      // Show fallback text if image fails to load
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) nextElement.style.display = 'flex';
                    }}
                  />
                  <div className="text-center flex items-center justify-center w-full h-full">
                    <div className="text-sm font-semibold text-slate-700">{partner.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Rocket className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">
                  B&B Tax
                </h3>
                <p className="text-xs text-muted-foreground font-mono">NEXT-GEN ACCOUNTING</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Comprehensive accounting services tailored to the needs of small businesses across New Zealand. 
              We help you stay compliant, organized, and focused on growing your business.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  Level 15, Innovation Tower, Auckland 1010
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  +64 9 123 4567
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  hello@bnbtax.nz
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About', path: '/about' },
                { name: 'Team', path: '/team' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'Resources', path: '/resources' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.path} 
                    className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-2 transform duration-200 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Solutions</h4>
            <ul className="space-y-3 text-sm">
              {[
                'AI Payroll Management',
                'Smart GST Filing',
                'Tax Optimization',
                'Digital Transformation',
                'Xero Mastery',
                'Compliance Automation',
                'Financial Intelligence'
              ].map((service) => (
                <li key={service} className="text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 B&B Tax and Accounting Service Limited. Pioneering the future of finance.
            </p>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                {[
                  { icon: Github, color: 'bg-gray-700' },
                  { icon: Twitter, color: 'bg-blue-600' },
                  { icon: Linkedin, color: 'bg-blue-700' }
                ].map((social, index) => (
                  <div 
                    key={index}
                    className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform`}
                  >
                    <social.icon className="h-5 w-5 text-white" />
                  </div>
                ))}
              </div>
              
              <div className="h-6 w-px bg-border" />
              
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm items-start md:items-center">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};
