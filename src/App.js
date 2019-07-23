import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from'./Products'
import Fruits from './Fruits'
import Vegetables from './Vegetables'
import Collapsible from 'react-collapsible';

class App extends React.Component{
  render(){
    return (
      <div>
         <h1 id="title">Welcome to Greens Kiosk</h1>
         <p>We sell fruits and vegetables</p>

         <h2>Products</h2>
         <Collapsible trigger="click to view products">
         <Products/>
         <ul id ="products">
         </ul>
         </Collapsible>

         <h2>Fruits</h2>
         <Collapsible trigger="click to view fruits">
         <Fruits/>
         <ul id ="fruList">
         </ul>
         </Collapsible>

         <h2>Vegetables</h2>
         <Collapsible trigger="click to view vegetables">
         <Vegetables/>
         <ul id ="vegList">
         </ul>
         </Collapsible>
      </div>
    )
  }
}

export default App;
