import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const friends = [
    {name:'jolil', age:34,city:'minamakka'},
    {name:'topon', age:50, city:'madina'},
    {name: 'korim', age:40,city:'dhaka'}
  ]


  const products = [
    { name:"Iphone", price:'$399'},
    { name:'PDF Reader', price: '$40'},
    { name:'Illustratoe', price:'$50'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          </a>


        <Product product={products[0]}></Product>
        <Product product = {products[1]}></Product>  
          
        
        {friends.map(friend => <Friends name={friend.name}></Friends>)}
        <ul>
          {
            friends.map(friend => <li>{friend.name}</li>)
          }
        </ul>

        <Counter></Counter>
        <Users></Users>
      


        
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
 const {name,price} = props.product;

  return (
    <div style= {productStyle}>
      <h2>Product Name:{name}</h2>
      <h3> Product Price {price}</h3>
      <h4>Product ItemName: {<Product product></Product>}</h4>
    </div>
  )

}


function Friends(props){

  const style = {
    backgroundColor:'white',
    border: '2px solid red',
    margin: '10px',
    color:'black'
  };

  return (
    <div style={style}>
      <h2>Name Place</h2>
  <h3>{props.name}</h3>

    </div>
  )

}

function Counter(){
  const [count,setCount] = useState(10);

  //const eventHandler = ()=> setCount(count+1);

  return(

    <div>
      <button onClick = {()=>setCount(count+1)}>IncreaseButton</button>
      <h1>Counter:{count}</h1>
      <button onClick = {()=>setCount(count-1)} class='btn btn-long'>Decrease Button</button>
      
    </div>
  )
}

function Users(){
  const [users,setUsers]= useState([]);

  useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res =>res.json())
  .then(data => setUsers(data))

  },[])

  return(
    <div>
      <h2>Counter Data Values</h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}



export default App;
