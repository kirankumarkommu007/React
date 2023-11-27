import React, { Component } from 'react';
class PageCom extends Component{
    state={
        counter:this.props.pageValue,
        Name: this.props.courseName,
    }
    render(){
        return(
            <div>
                <button className='badge bg-warning'>{this.state.counter}</button>
                <button className='badge bg-success'>{this.state.Name}</button>
            </div>
        )
    }
}
export default PageCom;