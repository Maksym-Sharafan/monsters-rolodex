import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  state={
    monsters:[],
    searchField:''
  };

  handleChange = (e) => {
    this.setState({searchField:e.target.value})
  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(users=>this.setState({monsters:users}))
  }

 render(){
   const {searchField, monsters}=this.state;
   const filteredMonsters = monsters.filter(monster=>
       monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
   
  return (
    <div className="App">
      <h1>Monsters-rolodex</h1>
      <SearchBox 
        placeholder="search monster"
        handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
 }
}

export default App;
