"use client"
import { useUser } from '@auth0/nextjs-auth0/client';
import '@/globals.css';
import { redirect } from 'next/navigation';

export default function Home() {
    //fields need to be matched on api/route.ts in the NewRace object
    //date and/or time fields will break the 'insert' if they are null so keep them required
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    if(!user) redirect('api/auth/login');

    return (
      <div>
        <h1>New User</h1>
        <>Looks like you're new here. Tell us a bit about yourself so we can get you signed up for races!</>
        <form action="/api/newuser" method="post" className='genericform'>
            <div>
                <label htmlFor="firstname">First Name:</label>
                <input type="text" id="firstname" name="firstname" required minLength={2} maxLength={20}/>
            </div>
            <div>
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" id="lastname" name="lastname" minLength={2} maxLength={20}/>
            </div>
            <div>
                <input type="hidden" value={user.email ?? ''} id="email" name="email" required/>
            </div>
            <div>
                <label htmlFor="phone">Phone Number:</label>
                <input type="text" id="phone" name="phone" required minLength={1}/>
            </div>
            <div>
                <label htmlFor="emergencyname">Emergency Contact Name:</label>
                <input type="text" id="emergencyname" name="emergencyname" required minLength={5}/>
            </div>
            <div>
                <label htmlFor="emergencyphone">Emergency Contact Phone Number:</label>
                <input type="text" id="emergencyphone" name="emergencyphone" required minLength={5}/>
            </div>

            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
