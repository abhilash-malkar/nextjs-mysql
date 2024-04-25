import connection from 'C:/xampp/htdocs/newcrud/app/db.js';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const itemId = req.query.id;
      const { name, age, mobile, email } = req.body;
      
      if (!name || !age || !mobile || !email) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      if (isNaN(age) || age <= 0) {
        return res.status(400).json({ message: 'Age should be a positive number' });
      }
      
      connection.query('UPDATE data SET name=?, age=?, mobile=?, email=? WHERE id=?', [name, age, mobile, email, itemId], (error, results) => {
        if (error) {
          console.error('Error while updating data:', error);
          return res.status(500).json({ message: 'Error while updating data' });
        }
        
        if (results.affectedRows === 0) {
          return res.status(404).json({ message: 'Item not found for update' });
        }
    
        res.status(200).json({ message: 'Data updated successfully' });
      });
    } catch (error) {
      console.error('Error while processing request:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
