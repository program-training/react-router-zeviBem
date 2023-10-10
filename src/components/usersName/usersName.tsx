import { Link } from "react-router-dom";
import  {useState, useEffect} from 'react';

  export default function UsersName() {
    const [users, setUsers] = useState<User[]>([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data as User[]))
        .catch((err) => console.log(err))
    }, []);
  
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/allUsers/${user.id}`}>{user.username}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }