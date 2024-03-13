import "./states.css"

function States () {
  let count = 0;
  const increment = () => {
    count = count + 1
    console.log(count);
  };

  return (
    <div className="states">
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default States