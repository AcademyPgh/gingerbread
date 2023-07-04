//db imports
import { db, Race, User, UserRace } from '@/db/dbstuff';
import { races, users, user_races } from '@/db/schema';
import { eq } from "drizzle-orm";

//pull in race ID through URL
export default async function Page({ params }: { params: { raceid: number } }) {
  //search the database for a matching ID
  const result: Race[] = await db.select().from(races).where(eq(races.id,params.raceid));

  //if we didn't find anything, return an error message
  if(result.length === 0)
  {
    return(
      <div>RACE ID NOT FOUND</div>
    )
  }

  //otherwise, grab the result and return a page populated with that row of races
  const myrace: Race = result[0];
    return (
      <div>
        <h1>{myrace.name}</h1>
        <div>Description: {myrace.description}</div>
        <div>other stuff about the race here</div>
        <h1>Assigned Users</h1>
        <AssignedUsers  myrace={myrace.id}/>
      </div>
    )
  }

  function AssignedUsers(params: any)
  {
    const myraceid = params.myrace;
    //this join is probably constructed incorrectly
    const userlist = db.select({firstname: users.firstname, lastname: users.lastname}).from(users).innerJoin(user_races, eq(myraceid,user_races.raceid));
    
    return(
      <div>
          ssss
      </div>
    );
  }