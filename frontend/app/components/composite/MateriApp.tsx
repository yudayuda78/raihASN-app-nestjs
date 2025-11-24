import { Button } from "~/components/ui/Button";

export default function MateriApp() {
  return (
    <div className="bg-white top-0 left-0 w-full z-50 min-h-screen flex flex-col py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="bg-amber-700">
            <div className="bg-amber-300 p-4 rounded-lg shadow-md flex flex-row items-start space-y-4">
              <h3 className="text-lg font-semibold">Materi Satu</h3>
              <Button>Download</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
