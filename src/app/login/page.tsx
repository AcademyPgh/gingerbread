import Link from 'next/link'
export default function Home() {
    return (
      <div>
        <h1>Login Page</h1>
        <Link href="/userhub">Log In</Link>
      </div>
    )
  }