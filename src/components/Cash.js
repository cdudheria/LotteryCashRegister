import React, { Component } from "react";
import '../styles/Cash.css';


class Cash extends Component {
    constructor(props) {
      super(props);
      this.cashAdd = props.cashAdd;
    }

    render() {
      return (
        <div className="">
          <div className="cash">
            <button value="1" id="btn1" onClick={(e)=>{this.cashAdd(e.target.value)}}>1 $</button>
            <button value="5" id="btn2" onClick={(e)=>{this.cashAdd(e.target.value)}}>5 $</button>
            <button value="10" id="btn3" onClick={(e)=>{this.cashAdd(e.target.value)}}>10 $</button>
            <button value="20" id="btn4" onClick={(e)=>{this.cashAdd(e.target.value)}}>20 $</button>
          </div> 
        </div>
      );
    }
  }

  export default Cash;