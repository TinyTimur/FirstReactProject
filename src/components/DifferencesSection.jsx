import { differences } from "../data";
import Button from "./Button/button"
import ClearButton from "./ClearButton"
import { useState } from "react";



export default function DifferencesSection() {
  const [counter, setCounter] = useState(0);
  const [contentType, setContentType] = useState(null);
  const [activeButton, setButtonActive] = useState(null);

  function clearCounter() {
    setCounter(0);
    setButtonActive(null);
    setContentType(null);
  }

  function handleClick(type) {
    console.log("Button Clicked ", type);
    setCounter(counter + 1);
    setContentType(type);
    setButtonActive(type);
    console.log(contentType);
  }

    return <section>
    <h3>Чем мы отличаемся от других?</h3>

    <Button
      className={activeButton === "way" ? "active" : ""}
      onClick={() => handleClick("way")}
    >
      <span>
        <h4>Подход</h4>
      </span>
    </Button>

    <Button
      className={activeButton === "easy" ? "active" : ""}
      onClick={() => handleClick("easy")}
    >
      Доступность
    </Button>

    <Button
      className={activeButton === "program" ? "active" : ""}
      onClick={() => handleClick("program")}
    >
      Концентрация
    </Button>

    <ClearButton onClick={clearCounter}></ClearButton>

    <p>
      {!contentType ? "Выберите одну из опций" : differences[contentType]}
    </p>
    <p>{counter}</p>
  </section>
}