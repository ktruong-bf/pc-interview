import { NextResponse } from 'next/server';
import { events } from '../data/events';

export async function GET(request: Request) {
  return NextResponse.json({ events });
}

export async function POST(request: Request) {
    const data: any = {};
  
    try {
      const formData = await request.formData();  
      formData.forEach((value: FormDataEntryValue, key: string) => data[key] = value);
    } catch(err) {
      // ignore this because if there is no form data, it will throw an error
    }

    // 2) If there is not enough information to create the event then return a Bad Request
  
    // 3) Else create the event and return it

    return NextResponse.json({ error: 'Not Implemented' }, { status: 501 });
  }