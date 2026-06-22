export default function Contact() {
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
        <h1 className="text-4xl font-bold text-black dark:text-white mb-8">
          Contact us
        </h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          For questions about the student portal, please reach out via email or
          use the contact form below when available. We are happy to help you
          get started.
        </p>
      </div>
    </div>
  );
}
