import React, { Component } from 'react';
class Mynew extends Component{
    state ={
        counter:0
    }
    getvalue(){
        if(this.state.counter===0) 
        return "Zero";
        else return this.state.counter
    }
    render(){
        return(
            <div>
                <span className='badge bg-warning'>{this.getvalue()} </span>
                </div>
        );
    }
}
export default Mynew