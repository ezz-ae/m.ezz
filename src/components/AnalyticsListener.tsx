
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackClientEvent } from '@/lib/analytics';
import { isNotebookId } from '@/components/notebooks/notebook-data';

export default function AnalyticsListener() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    if (pathname.startsWith('/notebooks/')) {
        const slug = pathname.split('/')[2];
        if (isNotebookId(slug)) {
            trackClientEvent({
                type: 'notebook_open',
                path: pathname,
                notebookId: slug,
            });
        }
    } else if (pathname === '/timeline') {
        trackClientEvent({ type: 'timeline_view', path: pathname });
    } else {
        trackClientEvent({ type: 'page_view', path: pathname });
    }
  }, [pathname]);

  return null;
}
