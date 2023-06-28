import '@/globals.css';

export default function Home() {
    //fields need to be matched on api/route.ts in the NewRace object
    //date and/or time fields will break the 'insert' if they are null so keep them required
    return (
      <div>
        <h1>Create a New Race</h1>
        <form action="/api" method="post" className='genericform'>
            <div>
                <label htmlFor="name">Race Name:</label>
                <input type="text" id="name" name="name" required minLength={2} maxLength={100}/>
            </div>
            <div>
                <label htmlFor="routeurl">Route URL:</label>
                <input type="text" id="routeurl" name="routeurl" required minLength={5} maxLength={100}/>
            </div>
            <div>
                <label htmlFor="herourl">Upload Image Placeholder:</label>
                <input type="text" id="herourl" name="herourl" minLength={5} maxLength={100}/>
            </div>
            <div>
                <label htmlFor="starttime">Start Time:</label>
                <input type="datetime-local" id="starttime" name="starttime" required/>
            </div>
            <div>
                <label htmlFor="endtime">End Time:</label>
                <input type="datetime-local" id="endtime" name="endtime" required/>
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" required minLength={5}/>
            </div>
            <div>
                <label htmlFor="contactemail">Contact Email:</label>
                <input type="text" id="contactemail" name="contactemail" required minLength={5}/>
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
