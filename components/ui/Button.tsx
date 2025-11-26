import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text';
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '' 
}) => {
  const baseStyle = "uppercase tracking-[0.15em] text-xs font-semibold py-4 px-8 transition-all duration-300 ease-out";
  
  const variants = {
    primary: "bg-chic-black text-white border border-chic-black hover:bg-transparent hover:text-chic-black",
    outline: "bg-transparent text-white border border-white hover:bg-white hover:text-chic-black hover:border-white",
    text: "text-chic-black hover:text-chic-gold p-0 underline-offset-4 hover:underline"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};