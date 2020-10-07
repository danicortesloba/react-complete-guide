import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28},
      { name: "Manu", age: 29},
      { name: "Stephanie", age: 26}
    ],
    otherState: "Some other value"
  }
switchNameHandler = (newName) => {
  // Don't do this: this.state.persons[0].name = 'Fabian'
  this.setState({persons: [
    { name: newName, age: 25},
    { name: "Dani", age: 36},
    { name: "Angi", age: 40}
  ]})
}

nameChangedHandler = (event) => {
  this.setState({persons: [
    { name: "Fabián", age: 25},
    { name: event.target.value, age: 36},
    { name: "Angi", age: 40}
  ]})
}

  render() {
    const style= {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Fabian')}>Switch name!</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        click={this.switchNameHandler.bind(this, 'Fabi!')}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangedHandler}>My hobbies: racing</Person>
        
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
