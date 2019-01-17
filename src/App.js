import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends Component {
  state = {};

  //initialize state with empty values, then fill them on componentWillMount?
  componentWillMount() {
    this.setState({
      calcVals: {
        dose: 24,
        ratio: 16,
        water: 384,
        total: 338
      }
    });

  };

  updateVals = (newVals) => {
    //copy state
    let calcVals = { ...this.state.calcVals };
    //set new values
    calcVals = { ...newVals };
    //update state
    this.setState({ calcVals });
  };

  render() {
    return (
      <div className="App">
        <h1>Calculator Component</h1>
        <div className="content">
          <Calculator 
            dose={this.state.calcVals.dose}
            ratio={this.state.calcVals.ratio}
            water={this.state.calcVals.water}
            total={this.state.calcVals.total}
            updateVals={this.updateVals}
          />
        </div>
      </div>
    );
  }
}

export default App;
