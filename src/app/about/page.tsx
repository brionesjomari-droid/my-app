export default function About() {
  return (
    <div
      className="min-h-screen bg-zinc-50 dark:bg-black relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/student-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-zinc-50/85 dark:bg-black/70" />
      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-6">
          About this Portal
        </h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
          This website demonstrates file-based routing in Next.js and provides a
          simple portal experience for students. Navigate between pages to view
          the homepage, contact details, and student listings.
        </p>
      </div>
    </div>
  );
}
