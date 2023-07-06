//db imports
import { db, Race } from '@/db/dbstuff';
import { races, users, signups } from '@/db/schema';
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
  const thisrace: Race = result[0];
  const signedup = await db.select().from(users)
    .innerJoin(signups, eq(users.id,signups.userid))
    .where(eq(signups.raceid,thisrace.id));
    return (
      <div>
        <h1>{thisrace.name}</h1>
        <div>Description: {thisrace.description}</div>
        <div>other stuff about the race here</div>
        <h1>Assigned Users:</h1>
        <AssignedUsers  data={signedup} thisrace={thisrace}/>
      </div>
    )
  }

  function AssignedUsers(params: any)
  {
    const userlist = params.data.map((user: any) => <div>Id:{user.users.id} First:{user.users.firstname} Last:{user.users.lastname}</div>);
    
    return(
      <div>
          {userlist}
          <h2>Add New User to Race</h2>
          <form action="/api/newsignup" method="post">
            <div>
              <label htmlFor="userid">Racer ID:</label>
              <input type="text" id="userid" name="userid" required minLength={1} maxLength={20}/>
            </div>
              <input type="hidden" id="raceid" name="raceid" value={params.thisrace.id}/>
            <button type="submit">Submit</button>
          </form>
      </div>
    );
  }