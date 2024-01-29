import React, { Component } from "react";

class SimpleCounter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            toggle: false,
        }
    }

    toggling = () => {
        this.setState((bool) => ({ toggle: !bool.toggle }))
    }

    incrementCount = () => {
        if (this.state.toggle) {

            this.setState((prev) => ({ count: prev.count + 1 }))
        }
    }

    render() {

        let { count, toggle } = this.state
        console.log(toggle)

        var changeStyle = null;
        if(toggle){
            changeStyle ={
                backgroundColor : "green"
            }
        }else{
            changeStyle ={
                backgroundColor : "red"
            }
        }

        var changeButtonStyle = null;

        if(toggle){
            changeButtonStyle = {
                cursor : "pointer"
            }
        }else{
            changeButtonStyle = {
                cursor : "not-allowed"
            }
        }


        return (
            <>
            <div>
                <h1>simple counter</h1>
                <h3>count : {count}</h3>
                <button style={changeStyle} onClick={this.toggling}>Set toggle</button>
                <button style={changeButtonStyle} onClick={this.incrementCount} disabled={!toggle}>counter</button>
            </div>
            </>
        )
    }
}

export default SimpleCounter;