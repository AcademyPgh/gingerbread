import Link from 'next/link'
export default function Home() {
    return (
      <div>
        <h1>Login Page</h1>
        <div><Link href="/userhub">Log In User</Link></div>
        <div><Link href="/adminhub">Log In Admin</Link></div>
      </div>
    )
  }