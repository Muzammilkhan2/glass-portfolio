export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-lg shadow-slate-900/10">
        <p className="text-sm uppercase tracking-[0.28em] text-sky-700">404 • Not found</p>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-900">Page not found</h1>
        <p className="mt-5 text-base leading-8 text-slate-600">
          The page you are looking for does not exist. Use the button below to return to the homepage.
        </p>
        <a
          href="/"
          className="mt-10 inline-flex rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800"
        >
          Return home
        </a>
      </div>
    </main>
  );
}
