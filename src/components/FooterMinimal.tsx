// src/components/FooterMinimal.tsx
import React from 'react';
import Link from 'next/link';

export function FooterMinimal() {
  return (
    <footer className="w-full py-6 text-center">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} The AIXSELF Foundation. All rights reserved.
      </p>
      <Link href="/terms" className="text-xs text-blue-400 hover:underline mt-2 inline-block">
        Constituent Law
      </Link>
    </footer>
  );
}
