
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Book, BrainCircuit, Bot, FileText, Home, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';


const NAV_LINKS = [
    { href: '/', label: 'Introduction', icon: Home },
    { href: '/library', label: 'Library', icon: Book },
    { href: '/theory', label: 'Theory', icon: BrainCircuit },
    { href: '/mindmap', label: 'Mind Map', icon: Share2 },
    { href: '/blog', label: 'Blog', icon: FileText },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
        {NAV_LINKS.map((link) => (
            <SidebarMenuItem key={link.href}>
            <Link href={link.href} passHref>
                <SidebarMenuButton
                    isActive={pathname === link.href}
                    className="!text-sm"
                    asChild
                >
                    <link.icon className="mr-2" />
                    <span>{link.label}</span>
                </SidebarMenuButton>
                </Link>
            </SidebarMenuItem>
        ))}
    </SidebarMenu>
  );
}
