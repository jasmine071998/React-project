import logo from './logo.svg';
import './App.css';
import Tweet from "./Tweet"
import React from "react";
import ReactDOM from "react-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import TodoItem from "./TodoItem"
import ContactCard from "./ContactCard"
import Joke from "./Joke"
import jokesData from "./jokesData"
import productData from "./productData"
import Product from "./Product"
import todosData from "./todosData"
import Conditional from "./Conditional"
import './style.css'

 /*
  const jokeComponent = jokesData.map(joke => <Joke question={joke.question} punchline={joke.punchline} />)
  const pc = productData.map(p => <Product product={p} />)
  const todoComp = todosData.map(tdd => <TodoItem todoarr = {tdd} />)
  
  return(
    <div className="todo-list">
     {todoComp}
      
    </div>
  )
<ContactCard contact ={{name:"jas", imgUrl:"http://placekitten.com/300/200", phone:"1234", email:"jas@gmail.com"}} />
<ContactCard contact ={{name:"mel", imgUrl:"http://placekitten.com/100/200", phone:"1234", email:"jas@gmail.com"}} />
<ContactCard contact ={{name:"def", imgUrl:"http://placekitten.com/200/100", phone:"1234", email:"jas@gmail.com"}} />
<ContactCard contact ={{name:"abc", imgUrl:"http://placekitten.com/400/300", phone:"1234", email:"jas@gmail.com"}} />
*/


class App extends React.Component{
  
  constructor(){
    super()
    this.state = {
      
      isLoggedIn : false,
      todos : todosData,
      count :0,
      dcount : 0
  
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleDC = this.handleDC.bind(this)
    this.handleChange=this.handleChange.bind(this)
    
  }
  
  handleClick() {
  this.setState (prevState => {
    return{count : prevState.count + 1}
  })
}

handleDC (){
  this.setState (prevState => {
    return{dcount : prevState.dcount + 2}
  })
}

handleMouseOver(){
  console.log("Hover detected!!")
}
handleChange(id){

  this.setState(prevState => {
    const updatedtdodos = prevState.todos.map( todo =>
      {
        if(todo.id==id){
          todo.completed= !todo.completed
        }
        return todo
  })
  return {
    todos : updatedtdodos
  }
  })
}
  render(){
    const todoComp = this.state.todos.map(tdd => <TodoItem key = {tdd.id} todoarr = {tdd}
      handleChange={this.handleChange} />)
      return(
        <div>
        {todoComp}
        <h1>You are logged {this.state.isLoggedIn ? "in" : "out"}</h1>
        <h1>thank you, i will add this to gitub branch</h1>
              </div>
      )
  }
}



export default App;
