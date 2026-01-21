'use client';
import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar({
  placeholder = "Search...",
  onSearch,
}: {
  placeholder?: string;
  onSearch?: (value: string) => void;
}) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
    console.log("Searching for:", query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full max-w-md bg-white border border-gray-300 rounded-lg px-3 py-1 shadow-sm focus-within:ring-2 focus-within:ring-blue-500"
    >
      <Search className="w-5 h-5 text-gray-500" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="ml-2 w-full outline-none text-gray-900 placeholder-gray-400"
      />
    </form>
  );
}
