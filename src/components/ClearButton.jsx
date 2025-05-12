import './ClearButton.css'

export default function ClearButton({onClick}) {
    return <button className='clearButton' onClick={onClick}>Clear Counter and active button</button>
}