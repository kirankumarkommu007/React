import React, { Component } from 'react';
class Buttons extends Component{
    state={
        counter:0,
        Counter1:0
    }
    getValue=() =>{
        console.log("Button Pressed !!!");
        console.log("this value ------>"+this);
        this.setState({counter:this.state.counter+=1})
       
    }
    getValue1=() =>{
        console.log("Button Pressed !!!");
        console.log("this value ------>"+this);
       
        this.setState({Counter1:this.state.Counter1-=1})
    }
    
    render(){
        return(
            <div>
                <span className='badge bg-success'>{this.state.counter}</span>
                <button type="button" class="btn btn-primary" onClick={this.getValue}>increament</button>
                <br />
                <span className='badge bg-danger'>{this.state.Counter1}</span>
                <button type="button" class="btn btn-primary" onClick={this.getValue1}>Decreament</button>    
            </div>
        )
    }
}
export default Buttons;