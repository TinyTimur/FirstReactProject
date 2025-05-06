import Header from "./components/header";
import { ways, differences } from "./data";
import WayToTeach from './components/wayToTeach'
import Button from "./components/Button/button";
import {useState} from 'react'
import ClearButton from "./components/ClearCounterButton/ClearButton"
// useState - хук с помощью которого можно создавать локальные состояния для компонента

//Когда мы что то пишем внутри тэга, мы неявно передаем это значение в функцию в виде childern в том числе html разметку



export default function App() {
  const [counter, setCounter] = useState(0)
  const [contentType, setContentType] = useState(null)      // Всегда массив, нельзя писать вне компонента. Либо внутри компонента либо внутри хука, на самом верхнем уровне компонента
  const [activeButton, setButtonActive] = useState(null)   // первое значение - кнопка на которую нажали, второе - функция которая вешает класс active на кнопку


  // Чтобы явно задать каждой кнопке определенную логику, следует обрабатывать клик в App.jsx
  // Мы можем передать функцию как параметр, от родительского элемента к дочернему
  function clearCounter() {
    setCounter(0)
    setButtonActive(null)
    setContentType(null)
  }


  function handleClick(type) {
    console.log('Button Clicked ', type)
    setCounter(counter + 1)
    setContentType(type)
    setButtonActive(type)
    console.log(contentType)         // Будет выдавать прошлое значение контента, пока не произойдет новый рендер
    
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
              return <WayToTeach {...way}/>      {/** С помощью метода .map() Для каждого элемента массива ways в компонент <WaysToTeach/> вызываем элемент массива, из которого его содержимое в логике которая задана в wayToTeach.jsx подставляется и рендерится*/}
            })}





            {/* <WayToTeach title={ways[0].title}                // По функционалу эти два вида записи абсолютно идентичны. Это все мы вручную делаем и выводим, автоматического масштабирования не предусмотрено
             description={ways[0].description} 
             />
            <WayToTeach {...ways[1]}                        // в каждый вызов функции мы передаем объект из массива ways, функция приводится в действие и возвращает на каждое место
             />
            <WayToTeach {...ways[2]}                         //своего вызова результат, в котором подставились значения из объекта по соответствующему индексу массива
             />
            <WayToTeach {...ways[3]}
             />
             <WayToTeach {...ways[4]}
             /> */}


          </ul>
        </section>                                              
        <section>
          <h3>Чем мы отличаемся от других?</h3>  

          <Button className={activeButton === 'way' ? "active" : ''} onClick={() => handleClick('way')}>
            <span>
              <h4>Подход</h4>
            </span>
            </Button>   

          <Button className={activeButton === 'easy' ? "active" : ''} onClick={() => handleClick('easy')}>Доступность</Button>

          <Button className={activeButton === 'program' ? "active" : ''} onClick={() => handleClick('program')}>Концентрация</Button>

          <ClearButton onClick={clearCounter} ></ClearButton>

          {/* <Button text="button2"/>                тут мы передаем параметр текст в функцию Button                      */}

          <p>{!contentType ? 'Выберите одну из опций' : differences[contentType]}</p>  
          <p>{counter}</p>

        </section>
      </main>
    </div>
  );
}



// export default App;
