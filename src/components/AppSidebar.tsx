
'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Logo } from './icons';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Briefcase, DraftingCompass, Milestone, Rss } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Mind Board', icon: <Briefcase /> },
  { href: '/about', label: 'Map & About', icon: <DraftingCompass /> },
  { href: '/timeline', label: 'Timeline', icon: <Milestone /> },
  { href: '/contact', label: 'Contact', icon: <Rss /> },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navLinks.map((link) => (
            <SidebarMenuItem key={link.href}>
                <Link href={link.href} passHref legacyBehavior>
                    <SidebarMenuButton
                        isActive={pathname === link.href}
                        tooltip={link.label}
                    >
                        {link.icon}
                        <span>{link.label}</span>
                    </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
