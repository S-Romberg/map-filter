import React, { Component } from 'react';
import Items from './components/Items'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={    
        items: [{name: 'Spiderman', superpower: 'Does whatever a spider can'}, {name: 'Batman', superpower: 'Being rich?'}, {name: 'Superman', superpower: 'Man of Steel'}, {name: 'Thor', superpower: 'Being a god'}]
    }
  }
  render() {
    var notAGod = this.state.items.filter(creature => {
      return creature.name.length > 4
    })

    var superheroes = notAGod.map(superhero => {
      return (
        <div>
          <h1>{superhero.name}</h1>
          <p>{superhero.superpower}</p>
        </div>
      )
  })

    return (
      <div className="App">
        <p>Heyyyy</p>
        {superheroes}
      </div>
    );
  }
}

export default App;
