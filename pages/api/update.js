import connection from 'C:/xampp/htdocs/newcrud/app/db.js';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const itemId = req.query.id;
    const { name, age, mobile, email } = req.body;
    connection.query('UPDATE data SET name=?, age=?, mobile=?, email=? WHERE id=?', [name, age, mobile, email, itemId], (error, results) => {
      if (error) {
        console.error('Error while updating data:', error);
        return res.status(500).json({ message: 'Error while updating data' });
      }
      res.status(200).json({ message: 'Data updated successfully' });
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
