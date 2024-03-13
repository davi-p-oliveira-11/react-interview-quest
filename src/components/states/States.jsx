import { useState } from "react";
import "./states.css"

function States () {
  const [count, setCount] = useState(0); {/*numbers */}
  const [name, setName] = useState(""); {/* strings */}
  const [isVisible, setIsVisible] = useState(false); {/* Booleans */}
  const [array, setArray] = useState([
    {
      name: "Paul",
      age: 22,
    },
    {
      name: "David",
      age: 19,
    }
  ]); {/* Arrays */}
  const [object, setObject] = useState({
    name: 'Kahn',
    age: 28,
  })

  const increment = () => {
    setCount(count + 1);

    setIsVisible(!isVisible);
    setName("John")
  }

  return (
    <div className="states">
      <h1>{count}</h1>
      <h1>{name}</h1>
      {isVisible ? <h1>Visible</h1> : <h1>Not visible</h1>}

      <button onClick={increment}>Change States</button>
    </div>
  )
}

export default States