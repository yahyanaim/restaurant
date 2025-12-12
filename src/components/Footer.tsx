export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Wingy Restaurant. All rights reserved.
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              aria-label="Twitter"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}