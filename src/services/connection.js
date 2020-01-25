import mysql from 'mysql'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'natanaelvichlima',
  database: 'prejects_register',
})
connection.connect(() => {
  console.log('connected to mysql ')
})

export default connection
