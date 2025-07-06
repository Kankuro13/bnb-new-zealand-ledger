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
    <section className="relative h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center overflow-hidden pt-20">
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
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {badge && icon && (
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            {icon}
            <span className="text-yellow-400 font-mono text-xs sm:text-sm tracking-wider uppercase">{badge}</span>
          </div>
        )}
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
          {title}
        </h1>
        
        {subtitle && (
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-normal mb-4 sm:mb-6">
            {subtitle}
          </h2>
        )}
        
        {description && (
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};
