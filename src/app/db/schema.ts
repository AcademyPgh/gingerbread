import { serial, text, timestamp, mysqlTable, datetime, varchar } from "drizzle-orm/mysql-core";
 
export const users = mysqlTable("users", {
  id: serial("id"),
  username: varchar("username", {length: 50}),
  firstname: varchar("firstname", {length: 50}),
  lastname: varchar("lastname", {length: 50}),
  email: text("email"),
  phone: varchar("phone", {length: 50}),
  emergencyname: varchar("emergencyname", {length: 50}),
  emergencyphone: varchar("emergencyphone", {length: 50}),
  role: text("role").$type<"admin" | "customer">(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const races = mysqlTable("races", {
  id: serial("id"),
  name: varchar("name", {length: 50}),
  routeURL: text("routeurl"),
  heroURL: text("herourl"),
  starttime: datetime("starttime"),
  endtime: datetime("endtime"),
  description: text("description"),
  contact: text("contact"),
  socials: text("socials"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

//races
//id
//name
//type: link to other table?
//start time
//start date

//join table userRaces
//id
//userId
//raceId
//bibNumber
//sensorId

//timings
//id
//RaceId
//SensorId
//Checkpoint1
//Checkpoint2
