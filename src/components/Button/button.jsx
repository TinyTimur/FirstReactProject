import './button.css'

// export default function Button({text}) {                                                    // А тут принимаем и возвращаем текст внутри тэга
//     return <button className='button' type="button"> {text}</button>
// }

// export default function Button({children}) {                                       // В данном случае на все кнопки будет выполняться одна и та же логика
//     function handleClick() {
//         console.log('button clicked')
//     }
//     function handleMouseEnter() {
//         console.log('mouse entered button')
//     }
    
//     return <button className='button' type="button" onClick={handleClick} onMouseEnter={handleMouseEnter}> {children}</button>       // При помощи children, мы указываем на то чтобы в тэг при возвращении передавался контент заданный внутри вызова тега в основном файле jsx
// }




export default function Button({children, onClick, className}) {            // Получаем неявно переданный контент children, из содержимого внутренностей тега <Button>{Вот здесь в основном файле мы передаем children}</Button>
    
    
    return <button className={`button ${className}`} type="button" onClick={onClick}  onDoubleClick={() => {console.log('DoubleClickDetected')}}> {children}</button> 
}