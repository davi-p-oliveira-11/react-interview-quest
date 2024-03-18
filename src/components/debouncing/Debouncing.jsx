import './debouncing.css';
import { useEffect, useState } from 'react';
import axios from "axios";
const pinAPI = `https://api.postalpincode.in/pincode`;
function Debouncing() {
 const [pin, setPin] = useState("");
 useEffect(() => {
   const debounce = setTimeout(() =>{
    axios
     .get(pinAPI + pin)
     .then((res) => {
      console.log(res.data[0].PostOffice);
     })
     .catch((err) => {
      console.log(err)
     });
   }, 2000)

   return () => {
    clearTimeout(debounce)
   }
 }, [pin])
  return(
    <div className="debouncing">
      <input 
        onChange={(e) => setPin(e.target.value)} 
        placeholder="Enter your pin" />
    </div>
  ) 
}

export default Debouncing;