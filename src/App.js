import React, {Component} from 'react';
import TareasList from "./Tareas";
import classes from "./App.css"


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
      <div className={classes.cuerpo}>
        <TareasList />
      </div>
    )
  }
}


export default App;
