export default function Students() {
  const students = [
    { id: 1, name: "juan de la Cruz" },
    { id: 2, name: "Maria santos" },
    { id: 3, name: "pedro reyes" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 py-16">
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
      </div>
    </div>
  );
}
