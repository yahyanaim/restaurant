import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact - Wingy Restaurant", 
  description: "Get in touch with Wingy Restaurant. Find our location, hours, contact information, and send us a message.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />
      
      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Page Header */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
            We'd love to hear from you. Get in touch with Wingy Restaurant today.
          </p>
        </section>

        {/* Main Content Split Layout */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Map and Location Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
                Find Us
              </h2>
              <div className="h-80 w-full rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 border border-zinc-200 flex items-center justify-center">
                <div className="text-center text-zinc-600">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-sm">Interactive Map</p>
                  <p className="text-xs mt-1">123 Main Street, Your City</p>
                </div>
              </div>
            </section>

            {/* Location Details */}
            <section className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">
                Visit Us
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-zinc-900">Address</h4>
                  <p className="text-zinc-600">123 Main Street</p>
                  <p className="text-zinc-600">Your City, State 12345</p>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900">Phone</h4>
                  <a 
                    href="tel:+1555555555" 
                    className="text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    (555) 555-5555
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900">Email</h4>
                  <a 
                    href="mailto:hello@wingyrestaurant.com" 
                    className="text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    hello@wingyrestaurant.com
                  </a>
                </div>
              </div>
            </section>

            {/* Social Links */}
            <section className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-zinc-600 border border-zinc-200 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
                  aria-label="Visit our Facebook page"
                >
                  <span>📘</span>
                  Facebook
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-zinc-600 border border-zinc-200 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
                  aria-label="Visit our Instagram page"
                >
                  <span>📷</span>
                  Instagram
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-zinc-600 border border-zinc-200 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
                  aria-label="Visit our Twitter page"
                >
                  <span>🐦</span>
                  Twitter
                </a>
              </div>
            </section>
          </div>

          {/* Right Column - Hours and Contact Form */}
          <div className="space-y-8">
            {/* Operating Hours */}
            <section className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
                Operating Hours
              </h2>
              <ul className="space-y-3 text-zinc-700">
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
                  We're open 365 days a year. Call ahead for large groups!
                </p>
              </div>
            </section>

            {/* Contact Form */}
            <section className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-zinc-900 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-zinc-900 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-zinc-900 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-vertical"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
                >
                  Send Message
                </button>
              </form>
              
              <div className="mt-4 text-xs text-zinc-500 text-center">
                We'll get back to you within 24 hours.
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}