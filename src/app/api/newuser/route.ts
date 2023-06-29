import { db, NewUser } from '@/db/dbstuff';
import { users } from '@/db/schema';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    //convert the incoming form request to a usable object
    const data = await request.formData();
    const form = Object.fromEntries(data);

    //parse the form data into the corresponding db ORM fields
    const entry: NewUser = {username: String(form.username), firstname: String(form.firstname), lastname: String(form.lastname), email: String(form.email), phone: String(form.phone), emergencyname: String(form.emergencyname), emergencyphone: String(form.emergencyphone), role: 'customer', createdAt: new Date()};

    await db.insert(users).values(entry);

    //redirect to the landing page; change the string literal for other site locations but be mindful that updating the database will take longer than the redirect
    return NextResponse.redirect(new URL('/', request.url), 302);
}

  