import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';
import { ArrowUpRight } from 'lucide-react';

const services: Service[] = [
  {
    id: 'ritual',
    title: 'Ritual Bienestar',
    description: 'Hair Spa & Tratamientos Profundos',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop',
    size: 'large'
  },
  {
    id: 'color',
    title: 'Coloración Premium',
    description: 'Balayage, Babylights & Corrección',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop',
    size: 'small'
  },
  {
    id: 'novias',
    title: 'Novias & Eventos',
    description: 'Maquillaje y Recogidos Exclusivos',
    image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?q=80&w=800&auto=format&fit=crop',
    size: 'tall'
  },
  {
    id: 'goa',
    title: 'GOA Organics',
    description: 'Alisados Veganos y Salud Capilar',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop',
    size: 'small'
  },
    {
    id: 'extensions',
    title: 'Extensiones',
    description: 'Volumen y Longitud Natural',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop',
    size: 'large'
  },
];

export const ServicesGrid: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-chic-black text-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Servicios Exclusivos</h2>
            <p className="text-gray-400 font-light max-w-md">Descubre nuestra gama de servicios diseñados para realzar tu belleza natural con las mejores técnicas del mercado.</p>
          </div>
          <button className="text-chic-gold uppercase tracking-widest text-xs font-bold border-b border-chic-gold pb-1 hover:text-white hover:border-white transition-all">
            Ver menú completo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative group overflow-hidden bg-gray-900 ${
                service.size === 'large' ? 'md:col-span-2' : 
                service.size === 'tall' ? 'md:row-span-2' : ''
              }`}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40"
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {service.description}
                  </p>
                </div>
                
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="text-chic-gold w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};