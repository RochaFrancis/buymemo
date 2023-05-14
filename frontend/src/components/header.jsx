import { useState } from 'react'

export function Header() {
    const [title, setTitle] = useState(<span style={{ color: 'black' }}>Buy Memory</span>)
    const colors = ['red', 'green', 'blue', 'orange', 'purple', 'pink','yellow', 'grey'] // an array of colors
    
    function handleClick() {
        const randomIndex = Math.floor(Math.random() * colors.length) // generate a random index
        const randomColor = colors[randomIndex] // select a color using the random index
        setTitle(<span style={{ color: randomColor }}>Buy Memory</span>) // update the title state with the new JSX span element
    }
    
    return (
        <h1 onClick={handleClick}>{title}</h1>
    )
}
