import { useState } from 'react'
import "./props.css"

function Props() {
  const [name, setName ] = useState("John");
  return <div className="Props"></div>
}

export default Props;