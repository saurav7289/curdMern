import React, { useEffect, useState } from 'react';
import { deleteUser, getUsers } from '../service/api';
import {Link} from 'react-router-dom';

const Table = () => {

    const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let res = await getUsers();
    setUsers(res.data);
  };


  const handleDelete = (id)=>{
    deleteUser(id);
    window.location.reload(true);
    
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">UserName</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
    {
        users.map(user=>(

            <tr key={user._id}>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.mobile}</td>
            <td>
            <Link to={`/user/update/${user._id}`} >
              <button className="btn btn-primary">Edit</button>
              </Link>
            </td>
            <td>
              <button onClick={()=>handleDelete(user._id)} className="btn btn-danger">Delete</button>
            </td>
          </tr>
        ))
    }
          
        </tbody>
      </table>
    </>
  );
};

export default Table;
