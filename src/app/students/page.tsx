export default function Students() {
  const students = [
    { id: 1, name: "juan de la Cruz" },
    { id: 2, name: "Maria santos" },
    { id: 3, name: "pedro reyes" },
  ];

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
          Students List
        </h1>
        <div className="space-y-2">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow"
            >
              <p className="font-semibold text-black dark:text-white">
                {student.name}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-sm text-zinc-600 dark:text-zinc-300">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200"
          >
            [View profile]
          </a>
        </div>
      </div>
    </div>
  );
}
