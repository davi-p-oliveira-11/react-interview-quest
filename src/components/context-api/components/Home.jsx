import { useContext } from "react"
import { UserData } from "../context/GlobalContext"
import Settings from "./Settings";

export default function Home() {
  let { name } = useContext(UserData);
  return(
    <div>
      <h1>The Name is {name}</h1>
      <Settings name={name}/>
    </div>
  )
}