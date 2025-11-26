import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import { SalonLocation } from '../types';

const salons: SalonLocation[] = [
  {
    id: 'urkijo',
    name: 'ChicBilbao Urkijo',
    address: 'Alameda Urquijo 94, 48013 Bilbao',
    phone: '944 022 673',
    image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'zunzunegui',
    name: 'ChicBilbao Zunzunegui',
    address: 'Juan Antonio Zunzunegui 7, 48013 Bilbao',
    phone: '946 570 412',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop'
  }
];

export const SalonsSection: React.FC = () => {
  return (
    <section id="salones" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-chic-black mb-6">Nuestros Salones</h2>
          <p className="text-chic-gray font-light">
            Dos espacios exclusivos diseñados para tu confort y relajación en el corazón de Bilbao.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {salons.map((salon, index) => (
            <motion.div
              key={salon.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden relative mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <img 
                  src={salon.image} 
                  alt={salon.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Floating Contact Card on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/95 backdrop-blur-sm border-t-2 border-chic-gold">
                   <div className="flex items-center gap-3 mb-2 text-chic-black">
                     <Phone size={18} className="text-chic-gold" />
                     <a href={`tel:${salon.phone.replace(/\s/g, '')}`} className="text-lg font-serif">{salon.phone}</a>
                   </div>
                   <div className="flex items-center gap-3 text-chic-gray text-sm">
                     <MapPin size={16} />
                     <span>{salon.address}</span>
                   </div>
                </div>
              </div>

              <div className="text-center group-hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-serif text-chic-black mb-2 group-hover:text-chic-gold transition-colors">{salon.name}</h3>
                <div className="h-[1px] w-12 bg-chic-black mx-auto group-hover:bg-chic-gold transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};