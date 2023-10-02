import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser, updateUser } from '../service/api';

const initialData = {
  username: "",
  name: "",
  email: "",
  mobile: "",
};

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [oneuser, setOneuser] = useState({ initialData });


  useEffect(() => {

    const getoneUserData = async () => {
      let res = await getUser(id);
      setOneuser(res.data);
    };
    getoneUserData();
  },[id]);

  
  
  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser(id,oneuser);
    console.log(oneuser);
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div style={{ backgroundColor: 'black' }}>
              <h3 className="text-white text-center fw-bold mt-3">MERN CURD APP</h3>
            </div>
          </div>
          <div className="col-md-4 mt-5 m-auto">
            <form onSubmit={handleUpdate}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={oneuser.username}
                  onChange={(e) =>
                    setOneuser({ ...oneuser, [e.target.name]: e.target.value })
                  }
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={oneuser.name}
                  onChange={(e) =>
                    setOneuser({ ...oneuser, [e.target.name]: e.target.value })
                  }
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={oneuser.email}
                  onChange={(e) =>
                    setOneuser({ ...oneuser, [e.target.name]: e.target.value })
                  }
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                  Mobile No.
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={oneuser.mobile}
                  onChange={(e) =>
                    setOneuser({ ...oneuser, [e.target.name]: e.target.value })
                  }
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
             
              <button type="submit" className="btn btn-success m-auto">
                UPDATE
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
