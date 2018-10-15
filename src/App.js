import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = { todoItem: [] }
  }

  componentDidMount() {
    axios.get("https://localhost:44333/api/todo")
      .then((res) => {
          this.setState({
              todoItem: res.data
          });
      }).catch((error) => {
        alert("There is an error in API call.");
      });
  }





  render() {
    console.log(this.state.todoItem)
    const todolist = this.state.todoItem.map(todo => {
      return (<tr key={todo.id}>
        <td>{todo.id}</td>
        <td>{todo.name}</td>
        <td>{todo.isComplete ? "Yes" : "No"}</td>
      </tr>)
    })

    return (
      
        this.state.todoItem != null && 
        <div>
            <table>
              <thead>
                <td>ID</td>
                <td>NAME</td>
                <td>IsCOMPLETE</td>
              </thead>
              <tbody>
                {todolist}
              </tbody>
            </table>
        </div>        
      
    );
  }
}

export default App;
