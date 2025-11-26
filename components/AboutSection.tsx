import React from 'react';
import { motion } from 'framer-motion';
import { Scissors } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-chic-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1200&auto=format&fit=crop" 
                alt="Silvia Pereira Chic Bilbao" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-chic-gold/10 -z-10" />
            <div className="absolute top-10 left-10 text-white font-serif text-5xl opacity-80 mix-blend-overlay">
                ChicBilbao
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif text-chic-black">
                Nosotros
              </h2>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-chic-gold"></div>
                <Scissors className="text-chic-gold w-5 h-5 rotate-90" />
                <div className="h-[1px] w-12 bg-chic-gold"></div>
              </div>
              <h3 className="text-xl italic font-serif text-chic-gray">
                Bienvenidos a nuestro espacio de belleza
              </h3>
            </div>

            <p className="text-chic-gray leading-relaxed font-light">
              Silvia Pereira, la mente creativa y alma de Chic Bilbao, comenzó esta increíble travesía en 2010. Hoy en día, Chic Bilbao lo forma un equipo profesional de 40 estilistas y opera en ubicaciones premium en el centro de Bilbao.
            </p>
            
            <p className="text-chic-gray leading-relaxed font-light">
              Nuestra filosofía se basa en la búsqueda constante de la excelencia, utilizando productos orgánicos y técnicas de vanguardia como GOA Organics y coloración premium. Creamos experiencias únicas donde el lujo y el bienestar se encuentran.
            </p>

            <div className="pt-4">
              <p className="font-serif text-lg text-chic-black">Silvia Pereira</p>
              <p className="text-xs uppercase tracking-widest text-chic-gold mt-1">Fundadora & Directora Creativa</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};