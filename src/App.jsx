<<<<<<< HEAD
import Header from "./components/Header/header";
import IntroSection from "./components/IntroSection";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import TabsSection from "./components/TabsSection";
import FeedBackSection from "./components/FeedbackSection/FeedBackSection";
import { useState } from "react";


export default function App() {
  const [tab, setTab] = useState('feedback')
=======
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
>>>>>>> prod

  return (
    <>
      <Header />
      <main>
<<<<<<< HEAD
        <IntroSection />
        <TabsSection activeButton={tab} active={tab} onChange={setTab}/>

        {tab === 'main' && (
        <> 
          <TeachingSection />
          <DifferencesSection />
        </>
      )}

        {tab === 'feedback' && (
        <>
          <FeedBackSection />
        </>
        )}

        
=======
        <h1>Hello React!</h1>
        <section>
          <h3>Наш подход к обучению</h3>
          <ul>
            {ways.map((way) => {
              return <WayToTeach key={way.title} {...way} />;
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
>>>>>>> prod
      </main>
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> prod
