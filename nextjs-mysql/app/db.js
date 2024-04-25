import mysql from 'mysql';

const connection = mysql.createConnection({
  host: '217.21.87.103',
  user: 'u767899523_srindhi',
  password: 'g&A7hc|Kze  ',
  database: 'u767899523_srindhi',
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database successfully');
});

export default connection;
