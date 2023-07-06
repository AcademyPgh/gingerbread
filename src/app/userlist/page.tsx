import { db, User } from '@/db/dbstuff';
import { users } from '@/db/schema';
import Link from 'next/link'

export default async function Home() {
  const result: User[] = await db.select().from(users);
  const userlist = result.map((user,index) => <div>Id:{user.id} First:{user.firstname} Last:{user.lastname}</div>);
    return (
      <div>
        <h1>Admin User List</h1>
        {userlist}
        <div><Link href="/newuser">Add a User</Link></div>
      </div>
    )
  }