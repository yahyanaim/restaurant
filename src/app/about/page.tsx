import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About - Wingy Restaurant",
  description: "Learn about Wingy's story, our culinary values, and the team behind our authentic dining experience.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />
      
      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            About Wingy
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
            Where authentic flavors meet warm hospitality in the heart of our community
          </p>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-semibold text-zinc-900">Our Story</h2>
              <div className="mt-6 space-y-4 text-zinc-700">
                <p>
                  Wingy was born from a simple vision: to create a place where authentic, 
                  flavorful food brings people together. What started as a family recipe 
                  passed down through generations has evolved into a beloved community 
                  gathering spot.
                </p>
                <p>
                  Founded in 2018, our restaurant began as a small dream to share the 
                  authentic spices and cooking techniques from our heritage. Today, we 
                  continue to honor those traditional flavors while creating new memories 
                  with every meal we serve.
                </p>
                <p>
                  Every dish tells a story of tradition, passion, and the warmth that 
                  comes from sharing a meal with loved ones. At Wingy, you're not just 
                  dining – you're becoming part of our family.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="h-80 w-full rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                <div className="text-center text-zinc-600">
                  <div className="text-4xl mb-2">🍽️</div>
                  <p className="text-sm">Our Restaurant Interior</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Atmosphere */}
        <section className="mb-16">
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-zinc-200">
            <h2 className="text-3xl font-semibold text-zinc-900 text-center mb-8">
              Our Atmosphere
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-zinc-700 mb-6">
                Step into Wingy and experience the warmth of genuine hospitality. 
                Our welcoming atmosphere blends modern comfort with traditional charm, 
                creating the perfect setting for any occasion.
              </p>
              <p className="text-zinc-600">
                Whether you're joining us for a casual lunch, celebrating a special 
                milestone, or enjoying a quiet dinner, our space is designed to make 
                every guest feel at home. The gentle hum of conversation, the aromatic 
                scents from our kitchen, and our attentive service all work together 
                to create an unforgettable dining experience.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-zinc-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 text-center">
              <div className="text-4xl mb-4">🌶️</div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Authentic Spices
              </h3>
              <p className="text-zinc-600">
                We source the finest authentic spices from around the world, carefully 
                selected to ensure every dish bursts with genuine flavors that tell 
                the story of their origins.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Warm Hospitality
              </h3>
              <p className="text-zinc-600">
                Every guest is treated like family. Our commitment to exceptional 
                service means creating an environment where everyone feels welcome, 
                valued, and cared for.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-zinc-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Chef Portrait */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-48 w-48 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center">
                <div className="text-4xl">👨‍🍳</div>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900">Chef Marco</h3>
              <p className="text-zinc-600">Head Chef & Co-Founder</p>
              <p className="mt-2 text-sm text-zinc-500">
                20+ years crafting authentic flavors with passion and tradition
              </p>
            </div>

            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-48 w-48 rounded-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                <div className="text-4xl">👩‍💼</div>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900">Sarah Johnson</h3>
              <p className="text-zinc-600">Restaurant Manager</p>
              <p className="mt-2 text-sm text-zinc-500">
                Ensuring every guest has an exceptional dining experience
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="mx-auto mb-4 h-48 w-48 rounded-full bg-gradient-to-br from-yellow-200 to-orange-200 flex items-center justify-center">
                <div className="text-4xl">👨‍💼</div>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900">David Chen</h3>
              <p className="text-zinc-600">Co-Founder</p>
              <p className="mt-2 text-sm text-zinc-500">
                Bringing together tradition and innovation in every aspect
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}