import { useState } from "react";
import "./input.css";

function Inputs() {
  const [objData, setObjData] = useState({});
  const getInputs = (value, name) => {
    let data = { [name]: value };

    setObjData({ ...objData, ...data });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(objData);
  };

  return (
    <form onSubmit={submit}>
      <div className="form">
        <input
          placeholder="Write your name"
          name="name"
          type="text"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
        />
        <input
          placeholder="Write your age"
          name="age"
          type="number"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
        />
        <input
          placeholder="Write your hobbies"
          name="hobbies"
          type="text"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
        />
        <input
          placeholder="Write a Date"
          name="date"
          type="date"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
        />
        <input
          placeholder="Write a Date"
          name="date"
          type="file"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
        />
        <button onClick={submit}>Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}

export default Inputs;
