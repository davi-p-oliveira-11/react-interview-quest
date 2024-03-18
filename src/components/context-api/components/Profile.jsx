
import { useContext } from "react";
import { UserData } from "../context/GlobalContext";

export default function Profile() {
  let { setName } = useContext(UserData);
  return (
    <div>
      <button onClick={() => setName("Maito Gai")}>Change the name</button>
    </div>
  );
}
