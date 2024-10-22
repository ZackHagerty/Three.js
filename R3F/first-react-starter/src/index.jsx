import './style.css'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';


const root = createRoot(document.querySelector('#root'))

root.render(
    <div>
        { /* Some content 
        <h1 style= {
            { 
                color: 'coral',
                backgroundColor: 'floralwhite'
            } 
        } className="title">Hello React</h1>
        <p className="cuteParagraph">Some <br />content: { Math.random() } </p>

        <label htmlFor="name">Name</label>
        <input type="checkbox" id="name" />
        */}

            <App clickerCount= {4}>
                <h1>My First React App</h1>
                <h2>And a fancy subtitle</h2>    
            </App>     
    </div>
)