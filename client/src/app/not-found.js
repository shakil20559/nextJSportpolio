import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center select-none">
      {/* Subtle ambient glow behind the 404 */}
      <div className="relative flex flex-col items-center">
        <div className="absolute -inset-10 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300/80 mb-3">
          Error 404
        </p>

        <h1 className="text-8xl sm:text-9xl font-extrabold tracking-tight bg-gradient-to-b from-blue-50 via-blue-100 to-purple-300/70 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-blue-50">
          Page not found
        </h2>

        <p className="mt-3 max-w-md text-sm sm:text-base text-blue-50/70 leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl font-medium text-sm bg-blue-50 text-[#15013a] hover:bg-white transition-all duration-200 shadow-lg shadow-purple-950/50"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}