import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { db, Race } from '@/db/dbstuff';
import { races, users, signups } from '@/db/schema';
import { eq } from "drizzle-orm";
import { getInternalUser } from '@/utils';
import { RaceDisplay } from '@/racedisplay';

export default withPageAuthRequired(
  async function Profile() {
    const internalUser = await getInternalUser();
    //otherwise populate the page with the user's contact info

    //and the list of races theyre signed up for

    const racelist = await db.select().from(races)
      .innerJoin(signups, eq(races.id,signups.raceid))
      .where(eq(signups.userid,internalUser.id));
      const racemap = racelist.map((item,index) => {return(<RaceDisplay myrace={item.races} key={index}/>);});
    return (
      <div>
        Hello {internalUser.firstname}
        <div>these are the races you're signed up for</div>
        {racemap}
      </div>
    )
},
{ returnTo: '/userhub' })