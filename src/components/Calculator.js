import React from 'react';

class Calculator extends React.Component {

    // calcDose = () => this.props.dose = (this.props.water / this.props.ratio);
    // calcRatio = () => this.props.ratio = (this.props.water / this.props.dose);
    // calcWater = () => this.props.water = (this.props.ratio * this.props.dose);
    // calcTotal = () => this.props.total = (this.props.water * .8812);

    newDose = (e) => {
        //calculate the new values
        const dose = e.currentTarget.value;
        const ratio = this.props.ratio;
        const water = (ratio * dose);
        const total = (water * .8812);
        //set the calculated values
        const newVals = {
            dose: dose,
            ratio: ratio,
            water: water,
            total: total
        };
        //send it to the updateVals method
       this.props.updateVals(newVals);
    };
    newRatio = (e) => {
        const ratio = e.currentTarget.value;
        const dose = this.props.dose;
        const water = (ratio * dose);
        const total = (water * .8812);
        const newVals = {
            dose: dose,
            ratio: ratio,
            water: water,
            total: total
        };
        this.props.updateVals(newVals);
    };
    newWater = (e) => {
        const water = e.currentTarget.value;
        const ratio = this.props.ratio;
        const dose = (water / ratio);
        const total = (water * .8812);
        const newVals = {
            dose: dose,
            ratio: ratio,
            water: water,
            total: total
        };
        this.props.updateVals(newVals);
    };
    newTotal = (e) => {
        const total = e.currentTarget.value;
        const ratio = this.props.ratio;
        const water = (total / .8812);
        const dose = (water / ratio);
        const newVals = {
            dose: dose,
            ratio: ratio,
            water: water,
            total: total
        };
        this.props.updateVals(newVals);
    };

    render() {
        return (
        <form className="calc-main">
            <div className="dose">
                <p>Dose</p>
                <input type="number" name="dose" value={this.props.dose} onChange={this.newDose} />
            </div>
            <div className="ratio">
                <p>Ratio</p>
                <input type="number" name="ratio" value={this.props.ratio} onChange={this.newRatio} />
            </div>
            <div className="water">
                <p>Water</p>
                <input type="number" name="water" value={this.props.water} onChange={this.newWater} />
            </div>
            <div className="brew">
                <p>Total Yield</p>
                <input type="number" name="total" value={this.props.total} onChange={this.newTotal} />
            </div>
        </form>
        );
    };
};

export default Calculator;