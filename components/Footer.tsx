import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-chic-white pt-24 pb-12 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <h4 className="font-serif text-2xl font-bold uppercase tracking-widest mb-6 text-chic-black">
              Chic<span className="text-chic-gold">Bilbao</span>
            </h4>
            <p className="text-sm text-gray-500 leading-loose">
              Redefiniendo el cuidado del cabello con lujo, sostenibilidad y un servicio personalizado en el corazón de Bilbao.
            </p>
          </div>

          <div>
            <h5 className="font-serif text-lg mb-6 text-chic-black">Explorar</h5>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-chic-gold transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-chic-gold transition-colors">Servicios</a></li>
              <li><a href="#salones" className="hover:text-chic-gold transition-colors">Salones</a></li>
              <li><a href="#" className="hover:text-chic-gold transition-colors">Empleo</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif text-lg mb-6 text-chic-black">Legal</h5>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-chic-gold transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-chic-gold transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-chic-gold transition-colors">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif text-lg mb-6 text-chic-black">Contacto</h5>
            <div className="space-y-4 text-sm text-gray-600">
               <p className="flex items-center gap-2">
                 <Mail size={16} className="text-chic-gold"/>
                 chicbilbao@chicbilbao.com
               </p>
               <div className="flex gap-4 mt-6">
                 <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-chic-black hover:text-white hover:border-chic-black transition-all">
                   <Instagram size={18} />
                 </a>
                 <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-chic-black hover:text-white hover:border-chic-black transition-all">
                   <Facebook size={18} />
                 </a>
               </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2024 Chic Bilbao. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0 uppercase tracking-widest">Designed for Luxury</p>
        </div>
      </div>
    </footer>
  );
};