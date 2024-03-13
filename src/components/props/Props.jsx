import { useState } from 'react'
import Child from './Child';
import "./props.css"

function Props() {
  const [name, setName ] = useState("John");
  return <div className="Props">
    <Child/>
  </div>
}

export default Props;