import { useEffect } from "react";

function Conditionals() {
  let age = 23;
  let name = "John";

  useEffect(() => {
    let age = 23;
    let name = "John";

    {
      /*
   if (age > 22) {
    console.log("You are now old")
   } else if (name === "John" && age === 22) {
    console.log("I am 22 years old");
    console.log("John is my name");
   } else {
    console.log("My name is not John");
    console.log("I am less than 22 years old");
   }
  */
    }

    age > 22 ? (
      console.log("You are now old")
    ) : name === "John" && age === 22 ? (
      // true
      <>
        {console.log("I am 22 years old")}
        {console.log("John is my name")}
      </>
    ) : (
      // false
      <>
        {console.log("I am less than 22 years old")}
        {console.log("John is not my name")}
      </>
    );
  }, []);
  return (
    <div className="Conditionals">
      {age > 22 ? (
        <h2>You are now old</h2>
      ) : name === "John" && age === 22 ? (
        // true
        <>
          <h2>I am 22 years old</h2>
          <h2>John is my name</h2>
        </>
      ) : (
        // false
        <>
          <h2>I am less than 26 years old</h2>
          <h2>Nishant is not my name</h2>
        </>
      )}
    </div>
  );
}

export default Conditionals;
