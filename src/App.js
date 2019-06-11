import React from 'react';
import Todo from './todo';
import AddTodo from './AddTodo';

class App extends React.Component
{
  state = {
    todos:[
      {id:1,content:"Go to medical Shop"},
      {id:2,content:"Pay the telephone bills"}
    ]
  }
  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id;
    })
    this.setState({
      todos
    })
  }

  addTodo = (todo)=>{
    todo.id = Math.random();
    let todos = [...this.state.todos,todo];
    this.setState({
      todos
    })
  }
  render(){
    return(
      <div className="todoapp container">
        <h1 className="center blue-text">Todo's App</h1>
        <Todo todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
        < AddTodo addTodo = {this.addTodo}/>
      </div>
    )
  }
}

export default App;
