import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { Form, Row } from 'react-bootstrap'; // Import Form and Row components from react-bootstrap
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Age, setAge] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:3001/getUser/'+id)
      .then(result=> {console.log(result)
      setName(result.data.Name)
      setEmail(result.data.Email)
      setAge(result.data.Age)})
      .catch((error) => console.log("Error: ", error));
  }, []);

  const Submit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3001/updateuser/"+id, { Name, Email, Age })
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((e) => console.log("error"));
  }

  return (
    <div style={{ background: 'linear-gradient(to right, #000428, #004e92)' }} className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-50 vh-30 bg-white rounded p-3">
        <Form onSubmit={Submit}>
          <h4>Update Users</h4>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
            <Form.Label column sm="2" htmlFor="name">Name</Form.Label>
            <Form.Control type="text" id="name" 
            value={Name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2" htmlFor="email">Email</Form.Label>
            <Form.Control type="email" id="email" 
            value={Email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextAge">
            <Form.Label column sm="2" htmlFor="age">Age</Form.Label>
            <Form.Control type="number" id="age"
             value={Age} onChange={(e) => setAge(e.target.value)} />
          </Form.Group>
          <button type="submit" className="btn btn-success">Submit</button>
        </Form>
      </div>
    </div>
  );
}

export default UpdateUser;
