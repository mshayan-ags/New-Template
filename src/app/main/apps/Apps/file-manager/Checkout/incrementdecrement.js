import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Divider } from "@material-ui/core";

class GroupedButtons extends React.Component {
  state = { counter: 1 };

  handleIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  handleDecrement = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
  };
  render() {
    const Btn = (
     <>
      <span style={{padding:8,fontSize:12}} onClick={this.handleDecrement}>-</span>
      <span style={{padding:8,fontSize:12}} disabled>{this.state.counter}</span>
      
      <span style={{padding:8,fontSize:12}} onClick={this.handleIncrement}>+</span>
      
     </>
    );

    return (
      <div size="small" aria-label="small outlined button group">
       {this.state.counter > 0 && Btn}
       </div>
    );
  }
}

export default GroupedButtons;