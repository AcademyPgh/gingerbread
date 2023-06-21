import { connect } from '@planetscale/database'

const config = {
  //add connection info here
  host: '<host>',
  username: '<username>',
  password: '<pass>'
}

const conn = connect(config)
const results = await conn.execute('SELECT name FROM runners;')

export default function Home() {
  
  const rows = results["rows"];
  const stuff = JSON.stringify(rows);
  return (
    <div>
      <div>HELL YES</div>
      {stuff}
    </div>
  )
}
