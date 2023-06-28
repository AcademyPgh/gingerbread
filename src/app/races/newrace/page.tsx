import { db, Race } from '@/db/dbstuff';
import { races } from '@/db/schema';

export default function Home() {
    return (
      <div>
        <h1>Create a New Race</h1>
        <form action="/api" method="post">
            <label htmlFor="name">Race Name:</label>
            <input type="text" id="name" name="name" required minLength={1} maxLength={50}/>

            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
