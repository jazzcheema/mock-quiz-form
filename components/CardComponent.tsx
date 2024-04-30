// components/SleekCard.tsx
import React from 'react';

interface SleekCardProps {
  title: string;
  description: string;
  color: string;
}

const SleekCard: React.FC<SleekCardProps> = ({ title, description, color }) => {
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg bg-${color} m-4`}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
      </div>
    </div>
  );
};

export default SleekCard;
