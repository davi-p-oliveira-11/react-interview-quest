function EventHandler() {
  const getInput = (e) => {
    console.log(e.target.name);
  };
  const addNums = (num1, num2) => {
    console.log(num1 + num2);
  };
  return (
    <div className="EventHandler">
      <input placeholder="Add Something" onChange={getInput} name="input" />
      <button onClick={() => addNums(2, 3)}>Add Numbers</button>
    </div>
  );
}

export default EventHandler;
