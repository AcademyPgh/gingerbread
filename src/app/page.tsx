//db imports
import { db, User, NewUser } from './db/dbstuff';
import { user } from './db/schema';

//link import
import Link from 'next/link'

const result: User[] = await db.select().from(user);

export default function Home() {
  const output = result.map((runner,index) => <div>{runner.username} & {runner.firstname} & {runner.lastname}</div>);
  return (
    <div>
      <h1>Landing/Race List</h1>
      <li><Link href="/races">Example Race {"(Link won't work due to eventual dynamic routing)"}</Link></li>
      {output}
    </div>
  )
}
