import { db, NewSignup } from '@/db/dbstuff';
import { signups } from '@/db/schema';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    //convert the incoming form request to a usable object
    const data = await request.formData();
    const form = Object.fromEntries(data);

    //parse the form data into the corresponding db ORM fields
    const entry: NewSignup = {userid: Number(form.userid), raceid: Number(form.raceid), signupdate: new Date()};

    await db.insert(signups).values(entry);

    //redirect back to the origin race
    return NextResponse.redirect(new URL(`/races/${form.raceid}`, request.url), 302);
}

  