

function Uncontrolled() {
  let name = React.createRef();
  let age = React.createRef();

  const getName = (e) => {
    console.log(e.target.value);
  }

  const submit = () => {
    console.log(name.current.value);
    console.log(age.current.age);
  }

  return (
    <div className="">
      {/*Uncontrolled Components */}
      <input type="Name" ref={name}/>
      <input type="Age" ref={age}/>

      {/*Controlled Components */}
      <input type="Name" onChange={getName}/>
      <input type="Age" onChange={getAge}/>
      <button onClick={submit}>Submit</button>
    </div>
  )
}

export default Uncontrolled;