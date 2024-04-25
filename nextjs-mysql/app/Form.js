'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/fetch');
      setItems(response.data);
    } catch (error) {
      console.error('Error while fetching data:', error);
      setError('Error while fetching data');
    }
  };

  const handleAdd = async () => {
    if (!name || !age || !mobile || !email) {
      alert('All fields are required');
      return;
    }
    if (age <= 0) {
      alert('Age should be greater than 0');
      return;
    }
    try {
      await axios.post('/api/add', { name, age, mobile, email });
      setName('');
      setAge('');
      setMobile('');
      setEmail('');
      fetchData();
      alert('Data entered successfully');
    } catch (error) {
      console.error('Error while submitting:', error);
      setError('Error while submitting data');
    }
  };

  const handleUpdate = async (itemId) => {
    console.log('handleUpdate called with itemId:', itemId);
    try {
      const itemToUpdate = items.find(item => item.id === itemId);
      if (!itemToUpdate) {
        console.error('Item not found for update');
        return;
      }
      const { name, age, mobile, email } = itemToUpdate;
      if (!name || !age || !mobile || !email) {
        alert('All fields are required');
        return;
      }
      if (age <= 0) {
        alert('Age should be greater than 0');
        return;
      }
      await axios.put(`/api/update/${itemId}`, { name, age, mobile, email });
      fetchData();
      alert('Data updated successfully');
    } catch (error) {
      console.error('Error while updating:', error);
      setError('Error while updating data');
    }
  };
  
  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`/api/delete/${itemId}`);
      fetchData();
      alert('Data deleted successfully');
    } catch (error) {
      console.error('Error while deleting:', error);
      setError('Error while deleting data');
    }
  };
  

  const validateMobile = (input) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(input);
  };

  return (
    <div className="row">
      <div className="col-3" style={{ backgroundColor: '#DAF7A6' }}></div>
      <div className="col-6">
        <form style={{ backgroundColor: 'white', marginTop: '100px', padding: '50px', borderRadius: '23px' }}>
          <label htmlFor='name' className="text">Name:</label>
          <input type="text" className="form-control" id='name' onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" />
          <br />
          <label htmlFor='age' className="text">Age:</label>
          <input type="number" className="form-control" id='age' onChange={(e) => setAge(e.target.value)} value={age} placeholder="Age" />
          <br />
          <label htmlFor='mobile' className="text">Mobile:</label>
          <input type="number" className="form-control" id='mobile' onChange={(e) => setMobile(e.target.value)} value={mobile} placeholder="Number" />
          
           {mobile && !validateMobile(mobile) && <p style={{ color: 'red' }}>Please enter a valid 10-digit mobile number</p>}
    
          <br />
          <label htmlFor='email' className="form-label">Email:</label>
          <input type="email" className="form-control" id='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
          <br /><br />
          <button type="button" className="btn btn-success" style={{ marginLeft: '150px' }} onClick={handleAdd}>Submit</button>
          <br /><br />

          <table style={{ borderCollapse: 'collapse', width: '100%', marginLeft: '10px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Name</th>
                <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Age</th>
                <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Mobile</th>
                <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Email</th>
                <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{item.name}</td>
                  <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{item.age}</td>
                  <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{item.mobile}</td>
                  <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{item.email}</td>
                  <td>
                    <button type="button" className='btn btn-info' onClick={() => handleUpdate(item.id)}>Update</button>
                    <button type="button" className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
      <div className="col-4" style={{ backgroundColor: '#DAF7A6' }}></div>
    </div>
  );
};

export default Form;