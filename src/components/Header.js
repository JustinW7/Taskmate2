import {useState} from "react";
import {useEffect} from "react";
import Logo  from "../assets/logo.svg"

export const Header = () => {
  const [theme,setTheme]= useState(JSON.parse(localStorage.getItem("theme"))||"medium");

  useEffect(() => {
    localStorage.setItem("theme",JSON.stringify(theme)); 
    document.documentElement.removeAttribute("class");

  document.documentElement.classList.add(theme);
  },[theme]);
  return (
  <header>
    <div className="logo">
      <img src={Logo} alt="Taskmate Logo" />
      <span>Taskmate</span>
      </div>
      <div className="themeSelector">
         <span onClick={()=>setTheme("light")} className={theme==="light"?"light activeTheme":"light"}></span>
         <span onClick={()=>setTheme("medium")}className={theme==="medium"?"medium activeTheme":"medium"}></span>
         <span onClick={()=>setTheme("dark")}className={theme==="dark activeTheme"?"dark activeTheme":"dark"}></span>
         <span onClick={()=>setTheme("gradientOne")}className={theme==="gradientOne"?"gradientOne activeTheme":"gradientOne"}></span>
         <span onClick={()=>setTheme("gradientTwo")}className={theme==="gradientTwo"?"gradientTwo activeTheme":"gradientTwo"}></span>
         <span onClick={()=>setTheme("gradientThree")}className={theme==="gradientThree"?"gradientThree activeTheme":"gradientThree"}></span>
        </div>
  </header>
  )
}