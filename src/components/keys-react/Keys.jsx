
function Key() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const details = [
    {
      id: 1,
      name: "Sasuke",
      age: 21,
    },
    {
      id: 2,
      name: "Daniel",
      age: 28,
    },
    {
      id: 3,
      name: "Daniel",
      age: 28,
    },
    {
      id: 4,
      name: "Nicholas",
      age: 20,
    },
    {
      id: 5,
      name: "Paul",
      age: 31,
    },
  ];
  return <div className="Key">
    {/* 
    <ul>
      {numbers.map((number) => {
        return <li key={number}>{number}</li>;
      })}
    </ul>
    */}
    

    <ul>
      {details.map((detail, index) => {
        return (
          <div key={index}>
            <li>{detail.name}</li>
            <li>{detail.age}</li>
          </div>
        )
      })}
    </ul>
  </div>
}

export default Key;