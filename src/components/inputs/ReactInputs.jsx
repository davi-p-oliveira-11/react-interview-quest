import { useState } from "react";

function Inputs() {
   const getInputs = () => {};

   return (
    <div className="form">
      <input placeholder="Write your name" />
      <input placeholder="Write your age"  />
      <input placeholder="Write your hobbies"  />
      <input placeholder="Write a Date"  />
      <button>Submit</button>
    </div>
   );
}

export default Inputs