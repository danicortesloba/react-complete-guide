import React, {useState} from 'react'
import './App.css'
import Person from './Person/Person'

const app = props => {

   const [personsState, setPersonsState]= useState({
        persons: [
          { name: "Max", age: 28},
          { name: "Manu", age: 29},
          { name: "Stephanie", age: 26}
        ]
      });

      const [otherState, setOthersState]= useState('some other value');

      switchNameHandler = () => {
        // Don't do this: this.state.persons[0].name = 'Fabian'
        //OJO: the difference with a class-based component is that in this case the new state REPLACES
        //the old state instead of merging with it. So we would lose "otherSTate" in this case so
        //we need to manually write it using several "useState".
        setPersonsState({
            persons: [
          { name: "Fabi", age: 25},
          { name: "Dani", age: 36},
          { name: "Angi", age: 40}
        ]
      })
    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <button onClick={switchNameHandler}>Switch name!</button>
          <Person 
          name={personsState.persons[0].name} 
          age={this.state.persons[0].age} />
          <Person 
          name={personsState.persons[1].name} 
          age={this.state.persons[1].age}>My hobbies: racing</Person>
          <Person 
          name={personsState.persons[2].name} 
          age={this.state.persons[2].age} />
        </div>
      );
}

export default app