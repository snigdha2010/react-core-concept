import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const products = [
    { name:"Iphone", price:'$399'},
    { name:'PDF Reader', price: '$40'},
    { name:'Illustratoe', price:'$50'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Product product={products[0]}></Product>
        <Product></Product>
      </header>
    </div>
  );
}

function Product(props){

  const productStyle = {
  color : 'white',
  backgroundColor : 'gray', 
  border: '2px red solid',
  width : '400px',
  margin : '10px'

}
  console.log(props);
  return (
    <div style= {productStyle}>
      <h2>{props.product.product.name}</h2>
      <h3> Product Price</h3>
    </div>
  )

}
export default App;
