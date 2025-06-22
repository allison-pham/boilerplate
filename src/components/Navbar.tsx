'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Log In', href: '/login' },
  ];

  return (
    <div className="flex">
      <nav className="flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition ${
              pathname === item.href
                ? 'text-blue-600 underline'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
