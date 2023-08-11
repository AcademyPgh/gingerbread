import { db, User } from './db/dbstuff';
import { users } from '@/db/schema';
import { eq } from "drizzle-orm";
import { redirect } from 'next/navigation';
import { getSession } from '@auth0/nextjs-auth0';

export async function getInternalUser(){
    const session = await getSession();
    const authUser = session?.user;

    const result = await db.select().from(users).where(eq(users.email, authUser?.email));
    const internalUser = result[0];
    //if we don't find the user in our DB, redirect to the new user form
    if(!internalUser) {
      redirect('/newuser');
    }
    return internalUser;
}