import { useEffect, useState } from "react";
import "./mapfilter.css";

function MapFilter() {
  const [users, setUsers] = useState([]);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  {
    /*how maps works */
  }
  const mapData = () => {
    let mappedArray = users.map((user) => user.id * 2);
    console.log(mappedArray);
  };

  {
    /* filters all data containing "c" */
  }
  const filterData = () => {
    let filteredData = users.filter((user) => {
      return user.name.includes("c");
    });

    console.log(filteredData);
  };

  {
    /* filters id number */
  }
  const filterDataId = () => {
    let filteredDataId = users.filter((user) => {
      return user.id > 5;
    });

    setUsers(filteredDataId);
  };

  {
    /*map numbers */
  }
  const mapNumbers = () => {
    let numberLessThan5 = numbers
      .filter((number) => {
        return number <= 5;
      })
      .map((filtered) => {
        return filtered * filtered;
      });
      setNumbers(numberLessThan5)
  };

  return (
    <div className="mapFilter">
      <h1>Users</h1>
      <div className="card-container">
        {users.map((user, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <p>Name: {user.name}</p>
              <p>Username: {user.username}</p>
            </div>
          </div>
        ))}
      </div>

      <h3>Numbers</h3>
      <div className="card-container">
        {numbers.map((number, index) => (
          <div className="card" key={index}>
            <div className="card-inner">{number}</div>
          </div>
        ))}
      </div>


      <button onClick={mapData}>See Mapped Array</button>
      <button onClick={filterData}>See Filtered Array</button>
      <button onClick={filterDataId}>See Filtered Id</button>
      <button onClick={mapNumbers}>Map Numbers</button>
    </div>
  );
}

export default MapFilter;
