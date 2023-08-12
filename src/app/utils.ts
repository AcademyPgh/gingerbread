import { db, User } from './db/dbstuff';
import { users } from '@/db/schema';
import { eq } from "drizzle-orm";
import { redirect } from 'next/navigation';
import { getSession } from '@auth0/nextjs-auth0';

//get a user from our user table based on an authenticated email address from zeroauth
export async function getInternalUser(){
    const session = await getSession();
    const authUser = session?.user;

    const result = await db.select().from(users).where(eq(users.email, authUser?.email));
    const internalUser = result[0];
    //if we have a valid authentication but don't find the user in our DB, redirect to the new user form
    if(!internalUser) {
      redirect('/newuser');
    }
    return internalUser;
}