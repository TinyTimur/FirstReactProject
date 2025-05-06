import Header from "./components/header";
import { ways, differences } from "./data";
import WayToTeach from "./components/wayToTeach";
import Button from "./components/Button/button";
import { useState } from "react";
import ClearButton from "./components/ClearCounterButton/ClearButton";

export default function App() {
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

  return (
    <div>
      <Header />
      <main>
        <h1>Hello React!</h1>
        <section>
          <h3>Наш подход к обучению</h3>
          <ul>
            {ways.map((way) => {
              return <WayToTeach {...way} />;
            })}
          </ul>
        </section>
        <section>
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
      </main>
    </div>
  );
}
