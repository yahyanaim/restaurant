import SectionHeading from "@/components/common/SectionHeading";
import DishCard from "@/components/common/DishCard";
import CTAButton from "@/components/common/CTAButton";
import InfoCard from "@/components/common/InfoCard";
import { featuredDishes } from "@/data";

export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="bg-sand-50">
      
      {/* Hero Section */}
      <section className="relative bg-sand-200 py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-dark mb-6 tracking-tight">
            Welcome to Wingy
          </h1>
          <p className="text-xl md:text-2xl text-sand-900 mb-10 max-w-2xl mx-auto">
            Experience authentic Moroccan flavors and warm hospitality in the heart of our community.
          </p>
          <div className="flex justify-center space-x-4">
            <CTAButton href="/menu" variant="primary">
              View Menu
            </CTAButton>
            <CTAButton href="/contact" variant="outline">
              Book a Table
            </CTAButton>
          </div>
        </div>
        {/* Decorative background element could go here */}
      </section>

      {/* Featured Dishes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Featured Dishes" 
            subtitle="Taste the Tradition"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <CTAButton href="/menu" variant="secondary">
              See Full Menu
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-sand-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Visit Us" 
            subtitle="We'd love to see you"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <InfoCard title="Opening Hours" icon={<span>🕒</span>}>
               <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>11:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Saturday - Sunday</span>
                  <span>10:00 AM - 11:00 PM</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-sand-300">
                <p className="text-sm">
                  Open 365 days a year. Perfect for any occasion!
                </p>
              </div>
            </InfoCard>

            <InfoCard title="Location" icon={<span>📍</span>}>
              <div className="space-y-2">
                <p>123 Spice Market Rd</p>
                <p>Marrakesh, Morocco</p>
                <p className="mt-4">
                  <a href="tel:+212524123456" className="text-primary hover:text-primary-dark transition-colors font-medium">
                    +212 524 123 456
                  </a>
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-sand-300">
                <p className="text-sm">
                  Call ahead for large groups and special events!
                </p>
              </div>
            </InfoCard>
          </div>
        </div>
      </section>
    </div>
  );
}
