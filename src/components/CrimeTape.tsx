import React from 'react';
import { cn } from '@/lib/utils';

interface CrimeTapeProps {
  className?: string;
  text?: string;
}

const CrimeTape: React.FC<CrimeTapeProps> = ({ 
  className, 
  text = "⚠ CRIME SCENE - DO NOT CROSS ⚠" 
}) => {
  return (
    <div className={cn("crime-tape my-8 flex items-center justify-center text-center font-bold", className)}>
      <span className="text-black text-sm md:text-base tracking-wider">
        {text}
      </span>
    </div>
  );
};

export default CrimeTape;