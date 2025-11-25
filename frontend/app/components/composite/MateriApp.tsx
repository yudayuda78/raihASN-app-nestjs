import { Button } from "~/components/ui/Button";

const materiList = [
  { title: "Materi Satu" },
  { title: "Materi Dua" },
  { title: "Materi Tiga" },
  { title: "Materi Empat" },
];

export default function MateriApp() {
  return (
    <div className="w-full min-h-screen flex flex-col py-12 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 flex-1">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Daftar Materi
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {materiList.map((materi, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {materi.title}
              </h3>
              <Button className="self-start  text-white">Pilih</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
