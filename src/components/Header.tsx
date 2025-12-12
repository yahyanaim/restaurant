import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold text-zinc-900">
          Wingy
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link 
            href="/" 
            className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}