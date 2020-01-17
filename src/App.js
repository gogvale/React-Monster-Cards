import React from 'react';
import './App.css';

import { CardList } from './components/CardList/card-list.component';
import { SearchBox } from './components/SearchBox/search-box.component';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
      shownMonsters: [],
    };
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.username.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <h1>Robots Roledex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={e => this.setState({ searchField: e.target.value }, () => console.log(this.state))}
        />
        <CardList monsters={filteredMonsters} />
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
