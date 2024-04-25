import connection from '../../../app/db.js';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const itemId = req.query.id;
    connection.query('DELETE FROM data WHERE id = ?', [itemId], (error, results) => {
      if (error) {
        console.error('Error while deleting data:', error);
        return res.status(500).json({ message: 'Error while deleting data' });
      }
      res.status(200).json({ message: 'Data deleted successfully' });
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
