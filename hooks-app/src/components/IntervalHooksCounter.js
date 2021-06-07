import React,{useState, useEffect} from 'react'

function IntervalHooksCounter() {
    const [count, setCount] = useState(0);


    const tick = () =>{
        setCount(count+1)
        //another way without adding dependency is by adding the setCount with a prevState
        //setCount(prevCount => prevCount+1)
    }
    useEffect(()=>
    {
        const interval = setInterval(tick, 1000)
        return ()=>{
            clearInterval(interval)
        }
    }, [count])

    return (
        <div>
            {count}        
        </div>
    )
}

export default IntervalHooksCounter
