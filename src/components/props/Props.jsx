import { useState } from 'react'
import Child from './Child';
import "./props.css"

{/* Props ae used to transfer propeties
from parent to child components */}

function Props() {
  const [name, setName ] = useState("John");

  const changeName = () => {
    setName('Kirk')
  }

  const resetName = () => {
    setName('John')
  }

  return ( 
  <div className="Props">
    <Child valueOfProps={name} changeName={changeName}/>

    <button onClick={() => setName("Paul")}>Change Name</button>
    <button onClick={resetName}>Reset Name</button>
  </div>
  )
}

export default Props;