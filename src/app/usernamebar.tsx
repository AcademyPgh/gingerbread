"use client"
import { useUser } from '@auth0/nextjs-auth0/client';
import React from 'react';
import Link from 'next/link'

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if(!user) return <Link href="/api/auth/login">Log In</Link>;

  return (
    user && (
      <div>
        <Link href="/userhub">{user.name}</Link>
        <div></div>
        <Link href="/api/auth/logout">Log Out</Link>
      </div>
    )
    
  );
}

