import { useEffect, useState } from "react";

export default function Clicker({ increment, keyName })
{
    const [ count, setCount ] = useState(parseInt(localStorage.getItem(keyName) ?? 0))

    useEffect(() =>
    {
        return () =>
        {
            localStorage.removeItem(keyName)
        }
    }, [])

    useEffect(() =>
    {
        localStorage.setItem(keyName, count)
    }, [count])

    const buttonClick = () =>
    {
        setCount(count + 1)
        increment()
    }

    return <div className="button-row">
        <button onClick={buttonClick}>Click</button>
        <p>Clicker Count: {count}</p>
    </div>
}