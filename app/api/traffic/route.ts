import { NextResponse } from 'next/server'

export async function GET() {
  const mockData = {
    timestamp: new Date().toISOString(),
    segments: [
      { id: 1, name: 'Mirpur Road', congestion: 0.75, risk: 0.3 },
      { id: 2, name: 'Gulshan Avenue', congestion: 0.45, risk: 0.15 },
      { id: 3, name: 'Airport Road', congestion: 0.85, risk: 0.6 },
      { id: 4, name: 'Dhaka-Mymensingh Highway', congestion: 0.55, risk: 0.25 },
    ],
    weather: { condition: 'Partly Cloudy', temp: 32, rain: 0 },
    prediction: 'Moderate traffic expected in next hour',
  }

  return NextResponse.json(mockData)
}