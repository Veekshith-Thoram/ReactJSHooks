import React,{useState} from 'react'
import HooksMouse from './HooksMouse';

function DisplayToggle() {
    const [display, setDisplay] = useState(true);


    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>Toggle Here</button>
            {display && <HooksMouse />}        
        </div>
    )
}

export default DisplayToggle
