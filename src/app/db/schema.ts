import { serial, text, timestamp, mysqlTable, datetime, varchar, int, float, boolean } from "drizzle-orm/mysql-core";
 
export const users = mysqlTable("users", {
  id: serial("id"),
  username: varchar("username", {length: 255}),
  firstname: varchar("firstname", {length: 255}),
  lastname: varchar("lastname", {length: 255}),
  email: varchar("email", {length: 255}),
  phone: varchar("phone", {length: 255}),
  emergencyname: varchar("emergencyname", {length: 255}),
  emergencyphone: varchar("emergencyphone", {length: 255}),
  role: text("role").$type<"admin" | "customer">(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const races = mysqlTable("races", {
  id: serial("id"),
  name: varchar("name", {length: 255}),
  routeURL: varchar("routeurl", {length: 2048}),
  heroURL: varchar("herourl", {length: 2048}),
  location: varchar("location", {length: 2048}),
  starttime: datetime("starttime"),
  endtime: datetime("endtime"),
  description: text("description"),
  contactemail: varchar("contactemail", {length: 255}),
  instagram: varchar("instagram", {length: 255}),
  facebook: varchar("facebook", {length: 255}),
  twitter: varchar("twitter", {length: 255}),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const signups = mysqlTable("signups", {
  id: serial("id"),
  userid: int('userid'), //.references(() => users.id), planetscale doesnt do foreign keys
  raceid: int('raceid'), //.references(() => races.id),
  bibnumber: int('bibnumber'),
  sensorid: int('sensorid'),
  totaltime: float('totaltime'),
  completed: boolean('completed'),
  paid: boolean('paid'),
  checkedin: boolean('checkedin'),
  signupdate: timestamp('signupdate')
  
});

//timings
//id
//RaceId
//SensorId
//Checkpoint1
//Checkpoint2
