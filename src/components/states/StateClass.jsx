import React, { Component } from 'react'
import './states.css'

export default class StateClass extends Component {
  constructor() {
    super();
    this.state = {
      name: 'John',
      age: 1,
      array: [1, 2, 3, 4, 5, 6],
    };
  }

  changeStatus = () => {
     this.setState({
      age: this.state.age * 2,
      name: "Mary"
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <button onClick={this.changeStatus}>Change Status</button>
        
        {/* 
         {this.state.array.map((item) => {
           return item * 2
        })}
        */}
       
      </div>
    )
  }
}
