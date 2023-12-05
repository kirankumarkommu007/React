import React, { Component } from 'react';
class LoginF extends Component {
    state = {
      details:{
        username:"",
        password:""
       }
      } 
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(" submit button pressed");
        console.log("username--->"+this.state.details.username);
        console.log("password--->"+this.state.details.password)
    }

    handleonChange=(k)=>{
        const details = { ...this.state.details};
        details[k.currentTarget.name] = k.currentTarget.value;
        this.setState({details})
        
    }

    render() { 
        return (
    <form onSubmit={this.handleSubmit}>
    <div className="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="text" onChange={this.handleonChange} value={this.state.details.username} className="form-control" id="username" name="username" />
    </div>
    <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={this.handleonChange} value={this.state.details.password} className="form-control" id="password" name="password"/>
     </div>
     <br />
     <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        );
    }
}
 
export default LoginF;