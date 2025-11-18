
'use client';

export type AnalyticsEvent = {
  type: 'page_view' | 'notebook_open' | 'timeline_view';
  path: string;
  notebookId?: string;
  ts: number;
};

export function trackClientEvent(event: Omit<AnalyticsEvent, 'ts'>): void {
  const fullEvent: AnalyticsEvent = {
    ...event,
    ts: Date.now(),
  };

  if (process.env.NODE_ENV === 'production') {
    try {
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(fullEvent)], { type: 'application/json' });
        navigator.sendBeacon('/api/analytics', blob);
      } else {
        fetch('/api/analytics', {
          method: 'POST',
          body: JSON.stringify(fullEvent),
          keepalive: true,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    } catch (error) {
        console.error('Error tracking analytics event:', error);
    }
  } else {
    console.log('Analytics Event (DEV):', fullEvent);
  }
}
