import connection from '../../app/db.js';
export default async function handler(req, res) {
  if (req.method === 'GET') {
    connection.query('SELECT * FROM data', (error, results) => {
      if (error) {
        console.error('Error while fetching data:', error);
        return res.status(500).json({ message: 'Error while fetching data' });
      }
      res.status(200).json(results);
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
