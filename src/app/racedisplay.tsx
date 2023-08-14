import { Race } from './db/dbstuff';
import Link from 'next/link';
export function RaceDisplay(props: any){
    //see schema.ts for which fields you have access to through the Race object
    const race: Race = props.myrace;
    const start = race.starttime;
    const fullDate = `${start?.getMonth()}/${start?.getDate()}/${start?.getFullYear()}`;
    const fullTime = `${start?.getHours()}:${start?.getMinutes()}`;
  
    //return our data from the db plus a dynamic route link based on the race ID
    return (
      <li className='listedrace'>
        <div className='NamesOfRaces'> <Link href={`/races/${race.id}`}>{race.name}</Link></div>
        
        <div className='dateAndTime'> {fullDate} {fullTime}</div>
        {/* <div> {fullTime}</div> */}
        <div className='descInfo'> {race.description}</div>
        {/* how are we going to handle overflow? wrap???  */}
      </li>
    )
  }