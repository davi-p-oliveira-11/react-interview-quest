

function Uncontrolled() {
  let name = React.createRef();
  let age = React.createRef();
  return (
    <div>
      <input type="Name" ref={name}/>
      <input type="Age" ref={age}/>
      <button>Submit</button>
    </div>
  )
}

export default Uncontrolled;