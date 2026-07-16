export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold text-blue-700">
            🏥 AI Medical Scribe
          </h1>

          <p className="text-gray-500 mt-1">
            Smart Clinical Documentation Assistant
          </p>
        </div>

        <div className="flex items-center gap-4">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
            🟢 Ready
          </span>

          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
            AK
          </div>

        </div>

      </div>

    </header>
  );
}