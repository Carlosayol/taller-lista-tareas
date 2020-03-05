import React, {Component} from 'react';
import './App.css';
import TareasList from "./Tareas";


class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <TareasList />
      </div>
    );
  }
}


export default App;
