'use client';
import { Navbar } from './Navbar';

export function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="w-full px-4 py-3 flex items-center justify-between">

        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
            ?
          </div>
          <span className="font-semibold text-lg text-gray-900">Project</span>
        </div>

        <Navbar />
      </div>
    </header>
  );
}