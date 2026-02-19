
import React from 'react';

interface SlideProps {
  children: React.ReactNode;
  active: boolean;
  bgClass?: string;
}

const Slide: React.FC<SlideProps> = ({ children, active, bgClass }) => {
  return (
    <div 
      className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
        active ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-full scale-95 pointer-events-none'
      } flex items-center justify-center p-8 md:p-16 ${bgClass || ''}`}
    >
      <div className="max-w-6xl w-full h-full flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
};

export default Slide;
