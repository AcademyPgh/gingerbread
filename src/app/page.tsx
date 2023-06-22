//connection imports
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

//query imports
import { mysqlTable, serial, text, varchar } from 'drizzle-orm/mysql-core';
import { InferModel } from 'drizzle-orm';

import Link from 'next/link'

const connection = connect({
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
});

export const users = mysqlTable('runners', {
  id: serial('id').primaryKey(),
  name: text('name'),
});

type User = InferModel<typeof users, "select">;
type NewUser = InferModel<typeof users, "insert">;

const db = drizzle(connection);
const result: User[] = await db.select().from(users);
console.log(result[0].id,result[0].name);
export default function Home() {
  const output = result.map((runner,index) => <div>{runner.name}</div>);
  return (
    <div>
      <div>HELL YES</div>
      {output}
      <Link href="/login">login</Link>
    </div>
  )
}
