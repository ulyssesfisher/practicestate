import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';


class App extends Component {

state = {
  username: 'Mickey Mouse',
  age: 900
}

usernameChangeHandler = (event) => {

  this.setState({
      username: event.target.value,
      age: 800

  })

}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
                   
          <UserInput change = {this.usernameChangeHandler} currentName = {this.state.username}/>

          <UserOutput username = {this.state.username}/>
          <UserOutput username = 'Karen Hardcode'/>
          <UserOutput username = {this.state.username}/>

          </p>
        </header>
      </div>
    );
  }
}

export default App;
