import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const data = await request.formData();

    const response = Object.fromEntries(data);
    return NextResponse.json(response);
}

  