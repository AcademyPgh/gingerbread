import { db, NewUserRace } from '@/db/dbstuff';
import { user_races } from '@/db/schema';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    //convert the incoming form request to a usable object
    const data = await request.formData();
    const form = Object.fromEntries(data);

    //parse the form data into the corresponding db ORM fields
    const entry: NewUserRace = {userid: Number(form.userid), raceid: Number(form.raceid), signupdate: new Date()};

    await db.insert(user_races).values(entry);

    //redirect to the landing page; change the string literal for other site locations but be mindful that updating the database will take longer than the redirect
    return NextResponse.redirect(new URL(`/races/${form.raceid}`, request.url), 302);
}

  