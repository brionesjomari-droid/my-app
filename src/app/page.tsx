export default function Home() {
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
        <div>
          <h1 className="text-5xl font-bold text-black dark:text-white mb-6">
            Welcome to Student Portal
          </h1>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Welcome to the Student Information Portal! Use the navigation menu
            to explore the website.
          </p>
        </div>
      </div>
    </div>
  );
}
