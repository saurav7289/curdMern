import React, { useState } from 'react';
import { addUser } from '../service/api';

const initialData = {
  username: "",
  name: "",
  email: "",
  mobile: "",
};

const Form = () => {
  const [user, setUsers] = useState({ initialData });

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    window.location.reload(true);
    setUsers({ initialData });
  };

  // useEffect(() => {
  //   setUsers({ initialData });
  // }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            name="username"
            onChange={(e) =>
              setUsers({ ...user, [e.target.name]: e.target.value })
            }
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={(e) =>
              setUsers({ ...user, [e.target.name]: e.target.value })
            }
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            onChange={(e) =>
              setUsers({ ...user, [e.target.name]: e.target.value })
            }
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Mobile No.
          </label>
          <input
            type="tel"
            name="mobile"
            onChange={(e) =>
              setUsers({ ...user, [e.target.name]: e.target.value })
            }
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
