import React,{useState, useEffect} from 'react'

function HooksMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logPosition = (e) => {
        console.log("mouse move");
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log("effect - mouse event");
        window.addEventListener("mousemove", logPosition)
    
    return ()=> {
        console.log("component unmount code");
        window.removeEventListener("mousemove", logPosition);
    }
    } 
    
    
    ,[]
        
    )
    return (
        <div>
            <h2>X: {x}, Y: {y}</h2>        
        </div>
    )
}

export default HooksMouse
