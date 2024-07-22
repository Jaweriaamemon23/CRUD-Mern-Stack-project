import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Age, setAge] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/createUser', { Name, Email, Age })
      .then((result) => {
        console.log(result);
        navigate('/'); // Navigate to the main user page after successful submission
      })
      .catch((e) => console.log('error', e));
  };

  return (
    <div style={{ background: 'linear-gradient(to right, #000428, #004e92)' }} className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-50 vh-30 bg-white rounded p-3">
        <Form onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              placeholder="Enter Name" 
              className="form-control" 
              onChange={(e) => setName(e.target.value)} 
              value={Name}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              placeholder="Enter Email" 
              className="form-control" 
              onChange={(e) => setEmail(e.target.value)} 
              value={Email}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="age">Age</label>
            <input 
              type="text" 
              placeholder="Enter Age" 
              className="form-control" 
              onChange={(e) => setAge(e.target.value)} 
              value={Age}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </Form>
      </div>
    </div>
  );
}

export default CreateUser;
