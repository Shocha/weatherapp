import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Search from './components/Search/Search';
import './App.css';

class App extends Component {

constructor (){
  super();
this.state={
  input:'',
}
}

onInputChange=(event)=>{
console.log(event.target.value);
}

  render(){
  return (
    <div className="App">
     <Navigation />
     
     <Logo />
     <Search onInputChange={this.onInputChange}/>
     {/*<Rank />
      <Signin/>
    <Register/>*/}
      </div>
    );
  }
}

export default App;
