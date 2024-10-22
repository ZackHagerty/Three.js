import Clicker from './Clicker.jsx';
import { useState } from 'react';

export default function App( { clickerCount, children })
{
    const [ hasClicker, setHasClicker ] = useState(true);
    const [ count, setCount ] = useState(0)

    const toggleClickerClick = () => 
    {
        setHasClicker(!hasClicker);
    }

    const increment = () =>
    {
        setCount(count + 1)
    }

    return <>
        { children }
        <div>Total count: { count }</div>
        <button onClick= { toggleClickerClick }>{ hasClicker ? 'Hide' : 'Show' } Clicker</button> 
        <br />
        { hasClicker && <>
            { [...Array(clickerCount)].map((value, index) =>
                <Clicker
                    key={ index }
                    increment={ increment }
                    keyName={ `count${index}` }
                />
            ) }
        </> }
    </>
}