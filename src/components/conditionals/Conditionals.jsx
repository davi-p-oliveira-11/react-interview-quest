import { useEffect } from "react";

function Conditionals() {
  useEffect(() => {
   let age = 22;
   let name = "John";
   if (age > 22) {
    console.log("You are now old")
   } else if (name === "John" && age === 22) {
    console.log("I am 22 years old");
    console.log("John is my name");
   } else {
    console.log("My name is not John");
    console.log("I am less than 26 years old");
   }

   age > 22 ? console.log('You are now old') : 
   name === "John" && age === 22 ? (
    <>
     {console.log('I am 22 years old')}
     {console.log('John is my name')}
    </>
   ) : (
    <>
     {console.log('I am 22 years old')}
     {console.log('John is my name')}
     {console.log('Retake at 43:34')}
    </>
   )
  }, []);
  return <div className="Conditionals"></div>
}

export default Conditionals;