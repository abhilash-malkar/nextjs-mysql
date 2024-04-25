import connection from '../../app/db.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, age, mobile, email } = req.body;
    connection.query('INSERT INTO data (name, age, mobile, email) VALUES (?, ?, ?, ?)', [name, age, mobile, email], (error, results) => {
      if (error) {
        console.error('Error while inserting data:', error);
        return res.status(500).send('Error while inserting data');
      }
      res.send(results);
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
