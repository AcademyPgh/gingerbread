//contents are placeholder

import { serial, text, timestamp, mysqlTable } from "drizzle-orm/mysql-core";
 
export const user = mysqlTable("user", {
  id: serial("id"),
  name: text("name"),
  email: text("email"),
  password: text("password"),
  role: text("role").$type<"admin" | "customer">(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});