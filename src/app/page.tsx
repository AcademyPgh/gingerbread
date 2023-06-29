//db imports
import { db, Race } from './db/dbstuff';
import { races } from './db/schema';
import Image  from 'next/image';
import logo from './images/Gingerbread.jpg';
import people from './images/peoplerunning.jpg'
//link import
import Link from 'next/link'

import './homestyles.css'

const result: Race[] = await db.select().from(races);

export default function Home() {
  //build a list of races based on the race table, then pass the race object as a parameter to the component
  const racelist = result.map((race,index) => {return(<RaceComponent myrace={race} key={index}/>);});
  return (
    <div>
      <Image
      src={logo}
      alt='gingerbread'
      className='logo'
      />
      <Image
      src={people}
      alt='people running'
      className='people'
      /> 
      <div className='bigInfoHolder'>
        <div className='topInfoHolder'>
          <div className='findRace'>
          Find Race:
         </div>
          <div className='inputHolder'>
            <form noValidate action="" role="search" >
              <input
                placeholder="Search Races"
                style={{ height:'20px',width:'280px',borderRadius:'10px', paddingLeft: '10px', marginTop: '5px',
              marginLeft: '8px'}}
                title='Search bar'
              />
            </form>
          </div>
        </div>
        
        <div className='bottomInfoHolder'>
          <div className='raceNameHolder'>
            Race Name:
          </div>
          <div className='date'>
            Start Date & Time:
          </div>
          <div className='description'>
            Description:
          </div>
        </div>
      </div>
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
      <div className='NamesOfRaces'> <Link href={`/races/${race.id}`}>{race.name}</Link></div>
      
      <div className='dateAndTime'> {fullDate} {fullTime}</div>
      {/* <div> {fullTime}</div> */}
      <div className='descInfo'> {race.description}</div>
      {/* how are we going to handle overflow? wrap???  */}
    </li>
  )
}
