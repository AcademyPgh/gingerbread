//db imports
import { db, Race } from './db/dbstuff';
import { races } from './db/schema';

//link import
import Link from 'next/link'

import './homestyles.css'

const result: Race[] = await db.select().from(races);

export default function Home() {
  //build a list of races based on the race table, then pass the race object as a parameter to the component
  const racelist = result.map((race,index) => {return(<RaceComponent myrace={race} key={index}/>);});
  return (
    <div>
      <h1>Landing/Race List</h1>
      {racelist}
    </div>
  )
}

//pull a couple fields out of the object to populate the list item
function RaceComponent(props: any){
  //see schema.ts for which fields you have access to through the Race object
  const race: Race = props.myrace;
  const start = race.starttime;
  const fullDate = `${start?.getMonth()}/${start?.getDate()}/${start?.getFullYear()}`;
  const fullTime = `${start?.getHours()}:${start?.getMinutes()}`;

  //return our data from the db plus a dynamic route link based on the race ID
  return (
    <li className='listedrace'>
      <div>Name: <Link href={`/races/${race.id}`}>{race.name}</Link></div>
      <div>Start Date: {fullDate}</div>
      <div>Start Time: {fullTime}</div>
      <div>Description: {race.description}</div>
    </li>
  )
}
