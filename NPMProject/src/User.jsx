import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001')
    .then(result => setUsers(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete =(id)=>{
    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(res =>{console.log(res)
    window.location.reload()})
    .catch(err=>console.log(err))
  }
  return (
    <div style={{ background: 'linear-gradient(to right, #000428, #004e92)' }} className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-50 vh-30 bg-white rounded p-3">
        <Link to='/create' className="btn btn-success mb-3">+ADD</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return <tr>
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td>{user.Age}</td>
                <td>
                  <Link to={`/update/${user._id}`} className="btn btn-success me-2">Update</Link>
                  <button className='btn btn-danger' onClick={(e)=>handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
})}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
