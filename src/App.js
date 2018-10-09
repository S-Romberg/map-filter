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
    return (
      <div className="App">
        <p>Heyyyy</p>
        <Items />
      </div>
    );
  }
}

export default App;
