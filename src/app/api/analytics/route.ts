
import { NextResponse } from 'next/server';
import type { AnalyticsEvent } from '@/lib/analytics';

export async function POST(request: Request) {
  try {
    const event: AnalyticsEvent = await request.json();
    
    // In a real production environment, you would send this to your analytics service.
    // For now, we just log it to the server console.
    console.log('Analytics Event Received:', event);

    return NextResponse.json({ ok: true }, { status: 202 });
  } catch (error) {
    console.error('Failed to process analytics event:', error);
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }
}
