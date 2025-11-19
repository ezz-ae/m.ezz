
// components/FooterMinimal.tsx
import Link from 'next/link';

export default function FooterMinimal() {
  return (
    <footer className="border-t border-black/5 py-8 px-6 md:px-16 text-center">
        <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Mahmoud Ezz. All rights reserved.
        </p>
    </footer>
  );
}
