import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1> Custom App ! </h1>
        </div>
    )

}
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href='https://google.com' target='_blank'> Visit GOOGLE  </a>
)

const ReactElement = React.createElement(
    'a',
    {href: 'https://google.com' , target:'_blank'}
)
ReactDOM.createRoot(document.getElementById('root')).
render(
    
     <App/>
    // <MyApp />  //Myapp() /// <ReactElement />
    // ReactElement
    //anotherElement
)
