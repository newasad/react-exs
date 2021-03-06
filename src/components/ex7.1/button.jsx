
import React from "react";
import "./button.css"
class Button extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
    
  }
counterHandler=()=>{
    this.setState({ counter: this.state.counter+1 });
}
  render() {
    return (
      <div className="buttonContainer">
        <input
          type="button"
          value="add to counter"
          onClick={this.counterHandler}
        />
        <div className="counterOutput">{this.state.counter}</div>
      </div>
    );
  }
}
export default Button;