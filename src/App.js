import React from 'react';
import './App.css';

import { CardList } from './components/CardList/card-list.component';
import { SearchBox } from './components/Search/search-box.component'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  render() {
    return (
      <div className='App'>
        <h1>Robots Roledex</h1>
        <SearchBox />
        {<CardList monsters={this.state.monsters} />}
      </div>
    )
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
}

export default App;
