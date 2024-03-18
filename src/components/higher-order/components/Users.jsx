import {useState, useEffect} from "react"
import HigherOrder from "../HigherOrder";

function Users() {
  return (
    <div>
      <h2>Users</h2>

      {users.slice(0, 10).map((user) =>{
        return <p key={name}>{user.name}</p>;
      })}
    </div>
  )
}


const UsersComp = HigherOrder("Users");

export default UsersComp;