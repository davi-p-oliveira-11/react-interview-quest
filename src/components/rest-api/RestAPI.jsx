import { useEffect, useState } from "react";
import axios from "axios";

function RestAPI() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  // Post request
  const postData = () => {
    axios
      .post("https://65f75721b4f842e808858367.mockapi.io/example", {
        name: name,
        age: 22,
        hobbies: ["Poetry", "Footbal", "Music", "Coding", "More Stuff"],
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  // Post, GET, PUT or PATCH, and DELETE
  
  // Put Request
  const updateData = (id) => {
    //console.log(id);
    axios.put(`https://65f75721b4f842e808858367.mockapi.io/example/${id}`, {
      name: name,
      age: 20,
      hobbies: [
        "Poetry",
        "Footbal",
        "Music",
        "Coding",
        "More Stuff",
        "Sleeping",
      ],
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  // delete function
  const deleteData = (id) => {
    //console.log(id);
    axios
    .delete(`https://65f75721b4f842e808858367.mockapi.io/example/${id}`)
    .then((res) => {
      getData();
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const getData = () => {
    axios
      .get("https://65f75721b4f842e808858367.mockapi.io/example/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.err(err);
      });
  }
  
  useEffect(() => {
    getData();
  }, []); 

  return (
    <div className="RestAPI">
      <input placeholder="name" onChange={(e) => setName(e.target.value)} />
      <button onClick={postData}>POST Data</button>

      {users.map((user) => {
        return (
          <>
            <h2>{`${user.id}. ${user.name}`}</h2>
            <button onClick={() => updateData(user.id)}>Update</button>
            <button onClick={() => deleteData(user.id)}>Delete</button>
          </>
        );
      })}
    </div>
  );
}

export default RestAPI;
