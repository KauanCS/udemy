import React, { useState } from 'react'; // Estudar PureComponent
import logo from './logo.svg';
import './App.css';
import Person from './components/Person'

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 26 },
      { name: 'Manu', age: 28 }
    ]
  });
  const [otherState, setOtherState] = useState('Some other value')

  console.log(personsState, otherState);
  
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name:'Maximilian', age: 30},
        {name: 'Manuelle', age: 38}
      ]
    });
  };
  
  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            _Learn React_
            
          </a>
          <button onClick = {switchNameHandler}>Switch Name</button>
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
          <Person>Learning</Person>
          Testando
        </header>
      </div>
    );
  }

export default App;
