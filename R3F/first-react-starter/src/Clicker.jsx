import { useEffect, useState } from "react";

export default function Clicker()
{
    const [ count, setCount ] = useState(0)
    const savedCount = parseInt(localStorage.getItem('count') ?? 0)

    useEffect(() =>
    {
        return () =>
        {
            localStorage.removeItem('count')
        }
    }, [])

    useEffect(() =>
    {
        localStorage.setItem('count', count)
    }, [count])

    const buttonClick = () => 
    {
        setCount(value => value + 1)
    }

    return <div className="button-row">
        <button onClick={buttonClick}>Click</button>
        <p>Clicker Count: {count}</p>
    </div>
}