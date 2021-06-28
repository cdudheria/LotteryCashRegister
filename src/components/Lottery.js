import React, { Component } from "react";
import '../styles/Lottery.css';

class Lottery extends Component {
    constructor(props) {
      super(props);
      this.addLotteryNumber = props.addLotteryNumber;
      this.addRandomLotteryNumbers = props.addRandomLotteryNumbers;
      this.clearValues = props.clearValues;
      this.cashBtn = props.cashBtn;
    }

    render() {
      return (
        <div  style={{width:"50%",float: "right"}}>
            <div className="divbtn">
                <button value="1" id="btn1"  onClick={(e)=>{ this.addLotteryNumber(e)}}>1</button>
                <button value="2" id="btn2"  onClick={(e)=>{ this.addLotteryNumber(e)}}>2</button>
                <button value="3" id="btn3"  onClick={(e)=>{this.addLotteryNumber(e)}}>3</button>
                <button value="4" id="btn4"  onClick={(e)=>{this.addLotteryNumber(e)}}>4</button>
                <button value="5" id="btn5"  onClick={(e)=>{this.addLotteryNumber(e)}}>5</button>
                <button value="6" id="btn6"  onClick={(e)=>{this.addLotteryNumber(e)}}>6</button>
                <button value="7" id="btn7"  onClick={(e)=>{this.addLotteryNumber(e)}}>7</button>
                <button value="8" id="btn8"  onClick={(e)=>{this.addLotteryNumber(e)}}>8</button>
                <button value="9" id="btn9"  onClick={(e)=>{this.addLotteryNumber(e)}}>9</button>
                <button value="10" id="btn10"  onClick={(e)=>{this.addLotteryNumber(e)}}>10</button>
                <button value="11" id="btn11"  onClick={(e)=>{this.addLotteryNumber(e)}}>11</button>
                <button value="12" id="btn12"  onClick={(e)=>{this.addLotteryNumber(e)}}>12</button>
                <button value="13" id="btn13"  onClick={(e)=>{this.addLotteryNumber(e)}}>13</button>
                <button value="14" id="btn14"  onClick={(e)=>{this.addLotteryNumber(e)}}>14</button>
                <button value="15" id="btn15"  onClick={(e)=>{this.addLotteryNumber(e)}}>15</button>
                <button value="16" id="btn16"  onClick={(e)=>{this.addLotteryNumber(e)}}>16</button>
                <button value="17" id="btn17"  onClick={(e)=>{this.addLotteryNumber(e)}}>17</button>
                <button value="18" id="btn18"  onClick={(e)=>{this.addLotteryNumber(e)}}>18</button>
                <button value="19" id="btn19"  onClick={(e)=>{this.addLotteryNumber(e)}}>19</button>
                <button value="20" id="btn20"  onClick={(e)=>{this.addLotteryNumber(e)}}>20</button>
            </div>
             <div>
                <button value="cash" id="btnCash" onClick={this.cashBtn}>Cash</button>
                <button value="clear" id="btnClear" onClick={this.clearValues}>Clear</button>
                <button value="random" id="btnRandom" onClick={(e)=>{ this.addRandomLotteryNumbers()}}>Random</button>
             </div>
        </div>
      );
    }
  }

  export default Lottery;