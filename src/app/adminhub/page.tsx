import Link from 'next/link'

export default function Home() {
    return (
      <div>
        Admin Hub
        <Link href="/login">Log In</Link>
      </div>
    )
  }