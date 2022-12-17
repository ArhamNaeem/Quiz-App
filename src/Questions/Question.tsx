import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../utils/Navbar";
import Easy from "../pages/Easy";
import Medium from "../pages/Medium";
import Hard from "../pages/Hard";
export default function Questions() {
  //make these globals among components
  const difficulty = useLocation().state.stateParam;
  const [qCount, setQCount] = useState(0);
  const [score, setScore] = useState(0); 
 

  return (
    <>
    
      <Easy />
    </>
  );
}
