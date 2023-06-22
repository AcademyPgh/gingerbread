//connection imports
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

//query imports
import { mysqlTable, serial, text, varchar } from 'drizzle-orm/mysql-core';
import { InferModel } from 'drizzle-orm';

//link import
import Link from 'next/link'

//migration imports
import { migrate } from 'drizzle-orm/planetscale-serverless/migrator';

//db connection 
const connection = connect({
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
});
const db = drizzle(connection);

//define object for ORM db access
export const users = mysqlTable('runners', {
  id: serial('id').primaryKey(),
  name: text('name'),
});

//attempt to run migrations
migrate(db, { migrationsFolder: './drizzle' });

type User = InferModel<typeof users, "select">;
type NewUser = InferModel<typeof users, "insert">;

const result: User[] = await db.select().from(users);

export default function Home() {
  const output = result.map((runner,index) => <div>{runner.name}</div>);
  return (
    <div>
      <h1>Landing/Race List</h1>
      <li><Link href="/races">Example Race {"(Link won't work due to eventual dynamic routing)"}</Link></li>
      {output}
    </div>
  )
}
