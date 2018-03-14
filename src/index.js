import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
let id = 0
const Todo = props => (
  <li>
    <input type = 'checkbox' checked = {props.todo.checked} onChange = {props.onToggle}/>
    <button onClick = {props.onDelete}>Delete</button>
    <span>{props.todo.text}</span>
  </li>
)
  
class App extends React.Component {
  constructor(){
    super()
    this.state  = {
      todos : [],
    }
  }

  addTodo(){
    const text = prompt("give me some todo text please!")
    this.setState({
      todos:[...this.state.todos,{id:id++,text:text,checked:false}],
      })
  }
  removeTodo(id){
    this.setState({
      todos:this.state.todos.filter(todo => todo.id !== id)
    })
  }
  toggleTodo(id){
    this.setState({
      todos:this.state.todos.map(todo => {
        if(todo.id === id){
          todo.checked = !todo.checked
        }
        return todo
      })
    })
  }

  render(){
    return (<div style={styles}>
      <Hello name="CodeSandbox" />
      <div>
        <div>todo count: {this.state.todos.length}</div>
        <div>unchecked todo count: {this.state.todos.filter(todo=>!todo.checked).length}</div>
        <button onClick={this.addTodo.bind(this)}>AddTodo</button>
        <ul>
          {this.state.todos.map(todo => 
            <Todo onDelete = {()=>this.removeTodo(todo.id)}
                  onToggle = {()=>this.toggleTodo(todo.id)}
             todo = {todo}/>
            )}
        </ul>
        
      </div>
    </div>
    )
  }
}
  

render(<App />, document.getElementById('root'))
