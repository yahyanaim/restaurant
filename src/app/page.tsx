import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />
      
      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Welcome to Wingy
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
            Experience authentic flavors and warm hospitality in the heart of our community
          </p>
        </section>

        {/* Quick Info Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          <section className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-zinc-900">Operating Hours</h2>
            <ul className="mt-3 space-y-2 text-zinc-700">
              <li className="flex justify-between">
                <span className="font-medium">Monday - Thursday</span>
                <span>11:00am - 9:00pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Friday - Saturday</span>
                <span>11:00am - 10:00pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Sunday</span>
                <span>12:00pm - 8:00pm</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-zinc-200">
              <p className="text-sm text-zinc-600">
                Open 365 days a year. Perfect for any occasion!
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-zinc-900">Visit Us</h2>
            <div className="mt-3 space-y-2">
              <p className="text-zinc-700">123 Main Street</p>
              <p className="text-zinc-700">Your City, State 12345</p>
              <p className="text-zinc-700">
                <a 
                  href="tel:+1555555555" 
                  className="hover:text-zinc-900 transition-colors"
                >
                  (555) 555-5555
                </a>
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-200">
              <p className="text-sm text-zinc-600">
                Call ahead for large groups and special events!
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
