import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-120px)]">
      <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6 overflow-y-auto">
        {/* Topics Scroll */}
        <div className="mb-6 -mx-6 px-6 overflow-x-auto">
          <div className="flex gap-2 pb-2">
            {["Arts", "World", "Sports", "Business", "Technology", "Science", "Health", "Entertainment"].map((topic) => (
              <button
                key={topic}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm text-gray-700 rounded-full whitespace-nowrap transition-colors duration-200"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Stacked */}
      <div className="space-y-6">
        {/* Research Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 h-1/2 overflow-y-auto">
          <SearchBar />
        </div>

      </div>
    </div>
  </main>
  );
}
