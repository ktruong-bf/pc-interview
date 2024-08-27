import { NextResponse } from 'next/server';
import { events } from '../../data/events';


export async function GET(request: Request, { params }: { params: { id: any } }) {
  // Question: what is the difference between using == vs. ===?
  const event = events.find(item => item.id == params.id);
  if (event) {
    return NextResponse.json({ event });
  }
  else {
    return NextResponse.json({ error: 'Not Found' }, { status: 404 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: any } }) {
  const data: any = {};

  try {
    const formData = await request.formData();  
    formData.forEach((value: FormDataEntryValue, key: string) => data[key] = value);
  } catch(err) {
    // ignore this because if there is no form data, it will throw an error
  }

  // 1) Implement this to add update the event in the events array

  // 2) If there is no event then return Not Found

  // 3) Else update the event and return it

  return NextResponse.json({ error: 'Not Implemented' }, { status: 501 });
}