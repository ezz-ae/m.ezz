
'use client';

import * as React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { MainNav } from '@/components/layout/main-nav';
import { Logo } from '@/components/icons';
import { usePathname } from 'next/navigation';

export function SiteLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // The library page has its own sidebar content, so we don't render the main nav there.
    const showMainNav = !pathname.startsWith('/library');

  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar collapsible="icon">
          <SidebarHeader className='p-4'>
            <Logo />
          </SidebarHeader>
          <SidebarContent>
            {showMainNav && <MainNav />}
          </SidebarContent>
        </Sidebar>
        <div className="flex-1">
             <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:hidden">
                <SidebarTrigger />
                <Logo />
            </header>
            {children}
        </div>
      </div>
    </SidebarProvider>
  );
}
