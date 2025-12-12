import React from 'react';
import SectionHeading from "@/components/common/SectionHeading";
import DishCard from "@/components/common/DishCard";
import { menuCategories } from "@/data";

export const metadata = {
  title: "Menu | Wingy Restaurant",
  description: "Explore our authentic Moroccan menu.",
};

export const dynamic = "force-static";

export default function MenuPage() {
  return (
    <div className="bg-sand-50 pb-16">
      {/* Page Header */}
      <section className="bg-sand-200 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark">Our Menu</h1>
        <p className="mt-4 text-xl text-sand-900 max-w-2xl mx-auto px-4">
          Discover the rich flavors of Morocco, from slow-cooked tagines to sweet pastries.
        </p>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        
        {/* Tagines Section */}
        <section id="tagines">
          <SectionHeading title="Tagines" subtitle="Slow-Cooked Perfection" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-8">
            {menuCategories.tagines.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </section>

        {/* Couscous Section */}
        <section id="couscous">
          <SectionHeading title="Couscous" subtitle="The National Dish" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-8">
            {menuCategories.couscous.map((dish) => (
               <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </section>

        {/* Pastries Section */}
        <section id="pastries">
          <SectionHeading title="Pastries" subtitle="Sweet Delights" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {menuCategories.pastries.map((dish) => (
               <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </section>

        {/* Drinks Section */}
        <section id="drinks">
          <SectionHeading title="Drinks" subtitle="Refreshing Beverages" />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {menuCategories.drinks.map((dish) => (
               <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
