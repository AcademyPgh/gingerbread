import { db, NewRace } from '@/db/dbstuff';
import { races } from '@/db/schema';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    //convert the incoming form request to a usable object
    const data = await request.formData();
    const form = Object.fromEntries(data);

    //parse the form data into the corresponding db ORM fields
    const entry: NewRace = {name: String(form.name), routeURL: String(form.routeurl), heroURL: String(form.herourl), starttime: new Date(String(form.starttime)), endtime: new Date(String(form.endtime)), description: String(form.description), contactemail: String(form.contactemail)};

    await db.insert(races).values(entry);

    //redirect to the landing page; change the string literal for other site locations but be mindful that updating the database will take longer than the redirect
    return NextResponse.redirect(new URL('/', request.url), 302);
}

  