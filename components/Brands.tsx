import React from 'react';

const brands = [
  "KERASTASE", "GHD", "GOA ORGANICS", "REVLON PROFESSIONAL", "L'OREAL PROFESSIONNEL", "CHICBILBAO EXTENSIONS"
];

export const Brands: React.FC = () => {
  return (
    <div className="py-16 bg-chic-black border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-8">
        <h3 className="font-serif text-white text-2xl italic">Nuestras Marcas</h3>
        <div className="w-10 h-[1px] bg-chic-gold mx-auto mt-4"></div>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 md:gap-32 items-center">
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <span key={index} className="text-gray-500 font-serif text-xl md:text-3xl tracking-widest uppercase opacity-50 hover:opacity-100 hover:text-chic-gold transition-all duration-300">
              {brand}
            </span>
          ))}
        </div>
      </div>
      
      <style>{`
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};