import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Timer from './components/Timer';

class App extends Component {
  state = {};

  componentWillMount() {
    this.setState({
      calcVals: {
        dose: 24,
        ratio: 16,
        water: 384,
        total: 338
      },
      units: {
        ml: true,
        oz: false
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

  convertUnit = (unit) => {
    //copy both relevant parts of state
    let units = { ...this.state.units };
    let calcVals = { ...this.state.calcVals };

    if(unit === 'oz') {
      //toggle the selected units
      units = { ml: false, oz: true};
      //convert the ml total to oz
      calcVals.total = (calcVals.total * 0.033814);
      //set them to state
      this.setState({ calcVals, units });
    } else if(unit === 'ml') {
      units = { ml: true, oz: false};
      calcVals.total = (calcVals.total / 0.033814);
      this.setState({ calcVals, units });
    } else {
      throw Error('Something odd happened with the units');
    };
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
            ml={this.state.units.ml}
            oz={this.state.units.oz}
            convertUnit={this.convertUnit}
          />
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;
