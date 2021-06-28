import React, { Component } from "react";
import '../styles/Cash.css';

import Lottery from './Lottery';
import Display from './Display';
import Cash from './Cash';
import Header from './Header';
class LotteryPage extends Component {
    constructor(props) {
      super(props);
      this.displayData = [];
      this.displayData.push(<><span>Number Selected: </span><br></br></>);
      this.buttonElm = [];
      this.cash = [];
      this.cash.push(0);
      this.state = {
        displayData : this.displayData,
        count : 0,
        buttonElm :this.buttonElm,
        cash : this.cash
      }
      this.randomElm = [];
      this.addLotteryNumber = this.addLotteryNumber.bind(this);
      this.addRandomLotteryNumbers = this.addRandomLotteryNumbers.bind(this);
      this.clearValues = this.clearValues.bind(this);
      this.cashAdd = this.cashAdd.bind(this);
      this.cashBtn = this.cashBtn.bind(this);
    }

    addLotteryNumber(e){
      let indexRemove = -1;
      let ele = '';
      this.buttonElm.map((el,index)=>{
        el.preventDefault();
        if(el.target.value == e.target.value){
          console.log('el.value '+el.target.value+' e.value'+e.target.value);
            indexRemove = index;
            ele = el;
        }
      });


      if(indexRemove > -1){
        this.buttonElm.splice( indexRemove,1);
        this.displayData.splice( indexRemove+1,1);
        this.setState({
          displayData :this.displayData,
          count : this.state.count-1, 
          buttonElm :this.buttonElm,
          cash : this.cash 
        });
        ele.target.removeAttribute("style");
        ele.target.removeAttribute("disabled");
      }else{
        if(this.state.count > 4){
          alert('You have already selected 5 numbers');
          return false;
        }
  
        this.displayData.push(<><span> Selected Number: {e.target.value}</span><br></br></>); 
        this.buttonElm.push(e);
        this.setState({
          displayData :this.displayData,
          count : this.state.count+1,
          buttonElm :this.buttonElm,
          cash : this.cash 
        });
        this.buttonElm.map((el)=>{
          el.preventDefault();
          el.target.setAttribute("style", "color: #fff;background-color: #17a2b8;border-color: #17a2b8;");
        });
      }
    }

    addRandomLotteryNumbers(){
      this.addLotteryNumber(1);
      this.addLotteryNumber(2);
      this.addLotteryNumber(3);
      this.addLotteryNumber(4);
      this.addLotteryNumber(5);
    };

    clearValues(){
      this.state.displayData.length = 0;
      this.displayData.push(<><span> Number Selected</span><br></br></>);
      this.buttonElm.map((el)=>{
        el.preventDefault();
        el.target.removeAttribute("style");
        el.target.removeAttribute("disabled");
      });
      this.state.buttonElm.length = 0;
      this.state.cash.length = 0;
      this.cash.push(0);
      this.setState({
        displayData :this.displayData,
        count : 0,
        buttonElm :this.buttonElm,
        cash : this.cash
      });
    }

    cashAdd(ch){
      let val = parseInt(this.state.cash[0]) + parseInt(ch);
      this.state.cash.length = 0;
      this.cash.push(val);
      this.setState({
        displayData :this.displayData,
        count : this.state.count,
        buttonElm :this.buttonElm,
        cash :  this.cash
      });
    }

    cashBtn(){
      if(this.state.count < 5){
        alert('You have to Select 5 numbers');
        return false;
      }
      this.buttonElm.map((el)=>{
        el.preventDefault();
        el.target.setAttribute("style", "background-color: #3c763d;border-color: #dff0d8;color: #dff0d8;");
        el.target.setAttribute("disabled", "disabled");
      });
    }

  

    render() {
      return (
        <div class="rootdiv">
          <Header />
          <Display displayData={ this.state.displayData} cashDisplay={this.state.cash} />
          <div Style="width: 970px;margin-left: 30%;">
            <Lottery addLotteryNumber={this.addLotteryNumber} clearValues={this.clearValues} cashBtn={this.cashBtn} />
            <Cash cashAdd={this.cashAdd}/>
          </div>
      </div>
      )
    }
  }

  export default LotteryPage;