import { useState } from "react";
import "./dyncamicinputs.css";

function DynamicInputs() {
  const [inputs, setInputs] = useState({})
  const getInputValues = (data) => {
    let { name, value } = data.target;
    let input = { [name] : value};
    setInputs({ ...inputs, ...input });
  };
  return (
    <div className="dynamicinput">
      <div className="input-container">
        <input placeholder="Name" name="name" onChange={getInputValues} />
        <input placeholder="Age" name="age" onChange={getInputValues} />
        <input
          placeholder="Years of Experience"
          name="ye"
          onChange={getInputValues}
        />
      </div>
      <button>Add New Group</button>
    </div>
  );
}

export default DynamicInputs;
