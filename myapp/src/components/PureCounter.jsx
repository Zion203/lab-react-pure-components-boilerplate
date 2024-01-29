import React, {PureComponent } from "react";

class PureCounter extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0,
            toggle: false,
            changeStyle :{
                backgroundColor : "red"
            },
            changeButtonStyle :{
                cursor : "not-allowed"
            }
        }
    }

    toggling = () => {
        this.setState((bool) => ({ toggle: !bool.toggle }))
        this.button_color()
    }

    incrementCount = () => {
        if (this.state.toggle) {

            this.setState((prev) => ({ count: prev.count + 1 }))
        }
    }
    button_color = () =>{
        if(!this.state.toggle){
            this.setState({changeStyle :{
                backgroundColor : "green"
            }})
        }else{
            this.setState({changeStyle :{
                backgroundColor : "red"
            }})
        }

        if(!this.state.toggle){
           this.setState({
            changeButtonStyle : {
                cursor : "pointer"
            }
           })
        }else{
            this.setState({
                changeButtonStyle : {
                    cursor : "not-allowed"
                }
            })
        }

    }
    render() {

        let { count, toggle } = this.state
        
        return (
            <>
            <div>
            <h1>pure component</h1>
                <h3>count : {count}</h3>
                <button style={this.state.changeStyle} onClick={this.toggling} >Set toggle</button>
                <button style={this.state.changeButtonStyle}  onClick={this.incrementCount}>counter</button>
            </div>
            </>
        )
    }
}
console.log(12)
export default PureCounter;