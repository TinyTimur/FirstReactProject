import React from "react"


// export default function IntroSection() {
//     return (
//         <section>
//             <h1 className="centered">
//                 Result University
//             </h1>
//             <h3 className="centered" style={{color: '#666'}}>
//                 Лучшие из лучших бля буду
//             </h3>
//         </section>
//     )
// }


export default function IntroSection() {
    return (
        React.createElement('section', null, 
            [
                React.createElement('h1', {key: 1, className: 'centered'}, 'Result University'),
                React.createElement('h3', {key: 2, className: 'centered', style: {color: '#666'}}, 'Делаем круто быстро четко ')
            ]
        )
    )
}