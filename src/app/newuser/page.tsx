import '@/globals.css';

export default function Home() {
    //fields need to be matched on api/route.ts in the NewRace object
    //date and/or time fields will break the 'insert' if they are null so keep them required
    
    return (
      <div>
        <h1>New User</h1>
        <form action="/api/newuser" method="post" className='genericform'>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required minLength={5} maxLength={20}/>
            </div>
            <div>
                <label htmlFor="firstname">First Name:</label>
                <input type="text" id="firstname" name="firstname" required minLength={2} maxLength={20}/>
            </div>
            <div>
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" id="lastname" name="lastname" minLength={2} maxLength={20}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" required minLength={1}/>
            </div>
            <div>
                <label htmlFor="phone">Phone Number:</label>
                <input type="text" id="phone" name="phone" required minLength={1}/>
            </div>
            <div>
                <label htmlFor="emergencyname">Emergency Contact Name:</label>
                <input type="text" id="emergencyname" name="emergencyname" required minLength={5}/>
            </div>
            <div>
                <label htmlFor="emergencyphone">Emergency Contact Phone Number:</label>
                <input type="text" id="emergencyphone" name="emergencyphone" required minLength={5}/>
            </div>

            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
