import React, { Component } from "react";

export default class Filterbtns extends Component {
    handleClick(currentValue) {
        // referred to filterbtns
        this.props.onChange(currentValue);
    }

    render() {
        return (
            <div>
                {/* Wrap the handleClick call in a function in order for it to be called correctly when elements are called */}
                {/* <button onClick={() => this.handleClick("")}>Show All</button>
                <button onClick={() => this.handleClick("under30")} className="under30">Under $30</button>
                <button onClick={() => this.handleClick("30-49")} classname="30-49">$30-$49</button>
                <button onClick={() => this.handleClick("50+")} className="50+">$50+</button> */}

                <button value='all' onClick={this.handleClick}>All</button>
                <button value='under30' onClick={this.handleClick}>Under $30</button>
                <button value='30-39' onClick={this.handleClick}>$30-$49</button>
                <button value='50+' onClick={this.handleClick}>$50+</button>
            </div>
        )
    }
}