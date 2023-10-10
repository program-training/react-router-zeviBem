import { Link, useParams } from "react-router-dom";
import  {useState } from 'react';

  export default function UserById() {
    const { id } =useParams()
    const [user, setUsers] = useState<User>();
  
    fetch(`https://jsonplaceholder.typicode.com/users/${id as string}`)
        .then((response) => response.json())
        .then((data) => setUsers(data as User))
        .catch((err) => console.log(err));

        return (
          <div>
              <h2>User Information</h2>
              <p>
                  <b>{user?.username}</b>
              </p>
              <p>
                  <b>Email:</b> {user?.email}
              </p>
              <p>
                  <b>City:</b>{user?.address.city}
                  <br/>
                  <b>Street:</b>{user?.address.street}
              </p>
              <p>
                  <b>Phone:</b> {user?.phone}
              </p>
              <Link to={`/users/todo/${user?.id as number}`}>User assignment</Link>
          </div>
      );
  };
  