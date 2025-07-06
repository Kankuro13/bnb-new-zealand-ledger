import { ReactNode } from "react";

interface JumbotronProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  icon?: ReactNode;
  badge?: string;
  overlayOpacity?: number;
}

export const Jumbotron = ({ 
  title, 
  subtitle, 
  description, 
  backgroundImage, 
  icon, 
  badge,
  overlayOpacity = 0.6 
}: JumbotronProps) => {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {badge && icon && (
          <div className="flex items-center justify-center space-x-2 mb-6">
            {icon}
            <span className="text-yellow-400 font-mono text-sm tracking-wider uppercase">{badge}</span>
          </div>
        )}
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          {title}
        </h1>
        
        {subtitle && (
          <h2 className="text-xl sm:text-2xl md:text-3xl text-white/90 font-normal mb-6">
            {subtitle}
          </h2>
        )}
        
        {description && (
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};
