import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const shop = (
//     <div>
//         <h1 id="title">Welcome to Greens Kiosk</h1>
//         <p>We sell fruits and vegetables</p>

//         <h2>Products</h2>
//         <ul id ="products">
//         </ul>

//         <h2>Fruits</h2>
//         <ul id ="fruList">
//         </ul>

//         <h2>Vegetables</h2>
//         <ul id ="vegList">
//         </ul>
//     </div>
// )

ReactDOM.render(<App/> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
