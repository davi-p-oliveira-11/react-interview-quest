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
  return ( 
  <div className="Props">
    <Child valueOfProps={name} changeName={changeName}/>

    <button onClick={() => setName("Paul")}>Change Name</button>
  </div>
  )
}

export default Props;