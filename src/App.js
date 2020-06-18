import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Jon", age: 21 },
      { name: "cass", age: 22 },
      { name: "turbo", age: 2 }
    ],
    usernames: 'feline-dis'
  }
  switchNameHandler = (name) => {
    this.setState({
      persons: [
        { name: name, age: 21 },
        { name: "Cassidy", age: 22 },
        { name: "Turbo Kitty", age: 2 }
      ]
    })
  }

  nameChangedHandler = (e) => {
    console.log(e);
    this.setState({
      persons: [
        { name: "Jon", age: 21 },
        { name: e.target.value, age: 22 },
        { name: "Turbo Kitty", age: 2 }
      ]
    })

  };

  render() {
    return (
      <div className="App">
        <h1>First React App</h1>
        <button onClick={this.switchNameHandler.bind(this, 'J')}>Switch Name</button>
        <Person
          click={() => this.switchNameHandler('Jonathan')}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} >
          I am the coder
          </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    )
  }
}

export default App;


