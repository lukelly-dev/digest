import { User } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl tracking-tight text-gray-900">
                digest<span className="text-blue-600">.</span>
              </h1>
            </div>
  
            {/* Navigation */}
            <nav className="flex items-center gap-8">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                home
              </Link>
              <Link
                href="/archive"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                archive
              </Link>
              <Link
                className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                aria-label="Profile"
                href="/profile"
                >
                <User className="w-5 h-5 text-white" />
              </Link>
            </nav>
          </div>
        </div>
      </header>
    );
  }
  