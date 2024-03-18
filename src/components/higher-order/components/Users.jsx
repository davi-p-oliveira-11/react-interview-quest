import {useState, useEffect} from "react"

export default function Users() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    let users = await fetch(`https://jsonplaceholder.typicode.com/users`)
     .then((response) => {
       return response;
     })
     .catch((err) => {
       return err;
     });

     setUsers(await users.json());
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {users.slice(0, 10).map((user) =>{
        return <p key={name}>{user.name}</p>;
      })}
    </div>
  )
}
