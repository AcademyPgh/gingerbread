import Link from 'next/link'

export default function Home() {
    return (
      <div>
        <h1>Admin Hub</h1>
        <Link href="/userlist">Master User List</Link>
        Upload CSV here
      </div>
    )
  }