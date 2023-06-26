import { serial, text, timestamp, mysqlTable, datetime, varchar } from "drizzle-orm/mysql-core";
 
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
