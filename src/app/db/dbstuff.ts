//connection imports
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

//query imports
import { InferModel } from 'drizzle-orm';

//import db object def from schema
import { users, races, signups } from './schema';

//db connection 
const connection = connect({
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
});
export const db = drizzle(connection);

//select types
export type User = InferModel<typeof users, "select">;
export type Race = InferModel<typeof races, "select">;
export type Signup = InferModel<typeof signups, "select">;

//insert types
export type NewUser = InferModel<typeof users, "insert">;
export type NewRace = InferModel<typeof races, "insert">;
export type NewSignup = InferModel<typeof signups, "insert">;

