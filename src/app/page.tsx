export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-20">
        <header className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold tracking-tight">Wingy</h1>
          <p className="text-lg text-zinc-600">
            A simple, static Next.js site scaffold.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold">Hours</h2>
          <ul className="mt-3 space-y-1 text-zinc-700">
            <li>Mon–Thu: 11:00am – 9:00pm</li>
            <li>Fri–Sat: 11:00am – 10:00pm</li>
            <li>Sun: 12:00pm – 8:00pm</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold">Location</h2>
          <p className="mt-3 text-zinc-700">123 Main Street, Your City</p>
          <p className="text-zinc-700">(555) 555-5555</p>
        </section>

        <footer className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Wingy Restaurant
        </footer>
      </div>
    </main>
  );
}
