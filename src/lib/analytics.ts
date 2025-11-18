
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
      const data = JSON.stringify(fullEvent);
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/analytics', data);
      } else {
        fetch('/api/analytics', {
          method: 'POST',
          body: data,
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
