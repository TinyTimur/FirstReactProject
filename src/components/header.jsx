import logo from "/logo-name.svg";
import { useState, useEffect } from "react";

export default function Header() {
  const [now, setNow] = useState(new Date())
  const altName = "Hui";

  setInterval(() => {
    setNow(new Date())
  }, 1000)

  return (
    <header>
      <img src={logo} alt={altName}></img>
      {/* <h3>Result University</h3> */}
      <span>Время сейчас: {now.toLocaleTimeString()} </span>
    </header>
  );
}
