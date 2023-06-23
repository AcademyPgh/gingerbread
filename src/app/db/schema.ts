import { serial, text, timestamp, mysqlTable } from "drizzle-orm/mysql-core";
 
export const users = mysqlTable("users", {
  id: serial("id"),
  username: text("username"),
  password: text("password"),
  firstname: text("firstname"),
  lastname: text("lastname"),
  email: text("email"),
  phone: text("phone"),
  emergencyname: text("emergencyname"),
  emergencyphone: text("emergencyphone"),
  role: text("role").$type<"admin" | "customer">(),
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
