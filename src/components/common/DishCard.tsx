import React from 'react';
import Image from 'next/image';

interface Dish {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
}

interface DishCardProps {
  dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-sand-200">
      <div className="relative h-48 w-full bg-sand-200">
         {/* Using a placeholder if image fails or isn't real, but we use Next Image assuming path exists or we configure remote patterns if needed. 
             For this task, I'll use a simple div fallback if no image provided, but ideally we use Image component. 
             Since I don't have actual image files, I will use a colored div with the title.
         */}
         <div className="absolute inset-0 flex items-center justify-center bg-sand-300 text-sand-900">
            <span className="text-lg font-medium opacity-50">{dish.title} Image</span>
         </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="text-xl font-bold text-primary-dark">{dish.title}</h3>
          <span className="text-lg font-semibold text-secondary">{dish.price}</span>
        </div>
        <p className="text-gray-600 mb-4">{dish.description}</p>
      </div>
    </div>
  );
};

export default DishCard;
