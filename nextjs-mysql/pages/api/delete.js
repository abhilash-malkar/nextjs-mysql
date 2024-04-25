  import axios from 'C:/xampp/htdocs/newcrud/app/axiosInstance.js'; // Assuming you name the file axiosInstance.js

  export default async function handler(req, res) {
    if (req.method === 'DELETE') {
      const itemId = req.params.id; // Use req.params.id for dynamic routes
      console.log('Received DELETE request for item with id:', itemId); // Log the itemId value
      try {
        await axios.delete(`/api/delete/${itemId}`);
        console.log('Data deleted successfully for item with id:', itemId); // Log successful deletion
        res.status(200).json({ message: 'Data deleted successfully' });
      } catch (error) {
        console.error('Error while deleting data:', error);
        res.status(500).json({ message: 'Error while deleting data' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed deleet' });
    }
  }
