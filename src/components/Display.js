import React, { Component } from "react";
import '../styles/Display.css';

class Display extends Component {
    constructor(props) {
      super(props);
      this.displayData = props.displayData;
      this.cashDisplay = props.cashDisplay;
    }
    
    render() {
      return (
        <>
        <div className="divDisplay">
          {this.displayData.map(item => (
              <>
                {item}
              </>
          ))}
          Total Cash : $
          {this.cashDisplay.map(c => (
              <>
               {c}
              </>
          ))}
        </div>
        </>
      );
    }
  }

  export default Display;