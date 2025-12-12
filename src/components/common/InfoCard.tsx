import React from 'react';

interface InfoCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, icon, children, className = '' }) => {
  return (
    <div className={`bg-sand-50 p-6 rounded-lg border border-sand-200 shadow-sm ${className}`}>
      <div className="flex items-center mb-4">
        {icon && <div className="mr-3 text-primary text-2xl">{icon}</div>}
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="text-gray-600">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
