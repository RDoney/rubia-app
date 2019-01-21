import React from 'react';

class Calculator extends React.Component {

    //TODO:
    //make sure to parseFloat the changed values
    //round values to single decimal

    newDose = (e) => {
        //check if oz is selected, convert it if so
        if(this.props.oz === true){
            //convert to ml
            let total = (this.props.total / 0.033814);
            //calculate the new values
            const dose = e.currentTarget.value;
            const ratio = this.props.ratio;
            const water = (ratio * dose);
            total = (water * .8812);
            //convert back to oz
            total = (total * 0.033814);
            //set the calculated values
            const newVals = {
                dose: dose,
                ratio: ratio,
                water: water,
                total: total
            };
            //send it to the updateVals method
            this.props.updateVals(newVals);
        } else {
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
        }
    };
    newRatio = (e) => {
        if(this.props.oz === true) {
            //convert
            let total = (this.props.total / 0.033814);
            //calculate
            const ratio = e.currentTarget.value;
            const dose = this.props.dose;
            const water = (ratio * dose);
            total = (water * .8812);
            //convert back
            total = (total * 0.033814);

            const newVals = {
                dose: dose,
                ratio: ratio,
                water: water,
                total: total
            };
            this.props.updateVals(newVals);
        } else {
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
    };
    newWater = (e) => {
        if(this.props.oz === true) {
            //convert
            let total = (this.props.total / 0.033814);
            //calculate
            const water = e.currentTarget.value;
            const ratio = this.props.ratio;
            const dose = (water / ratio);
            total = (water * .8812);
            //convert back
            total = (total * 0.033814);

            const newVals = {
                dose: dose,
                ratio: ratio,
                water: water,
                total: total
            };
            this.props.updateVals(newVals);

        } else {
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
    };
    newTotal = (e) => {
        if(this.props.oz === true) {
            let total = e.currentTarget.value;
            //convert
            total = (total / 0.033814);
            //calculate the rest
            const ratio = this.props.ratio;
            const water = (total / .8812);
            const dose = (water / ratio);
            //convert back
            total = (total * 0.033814);
            //assign to new vals
            const newVals = {
                dose: dose,
                ratio: ratio,
                water: water,
                total: total
            };
            this.props.updateVals(newVals);
        } else {
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
    };
    newUnit = (e) => {
        let unit = e.currentTarget.value;
        this.props.convertUnit(unit);
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
                <span className="unit-check">
                    <input type="radio" name="unit" value="ml" onChange={this.newUnit} defaultChecked /> ml
                    <input type="radio" name="unit" value="oz" onChange={this.newUnit} /> oz
                </span>
            </div>
        </form>
        );
    };
};

export default Calculator;