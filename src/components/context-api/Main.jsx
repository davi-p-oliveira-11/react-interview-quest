import { useState } from "react";
import Home from "./components/Home"
import Profile from "./components/Profile"

export default function Main() {
  const [name, setName] = useState("Ninshant")
  return(
    <div>
      <Home name={name} />
      <Profile setName={setName} />
    </div>
  );
}