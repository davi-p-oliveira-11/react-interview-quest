import { useState } from "react";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { UserData } from "./context/GlobalContext";

export default function Main() {
  const [name, setName] = useState("Ninshant");
  const [age, setAge] = useState(51);
  return (
    <div className="main">
      <UserData.Provider value={{name, setName, age}}>
        <Home name={name} />
        <Profile />
      </UserData.Provider>
    </div>
  );
}
