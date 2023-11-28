import React, { Component } from 'react';
import Student from './Data';
import Pagenation from './Pagenation';
class Propstable extends Component{
    state={
      perPage :6,
        stu:Student,
        dislay:[]
    }

  render() {
    return (
     <>
     <table className="table table-striped">
          <thead>
            
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Roll no</th>
              <th scope='col'>College Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.stu.map((each)=>{
                return(
                    <tr key={each.roll_no}>
                        <td>{each.name}</td>
                        <td>{each.roll_no}</td>
                        <td>{each.college_name}</td>
                    </tr>
                )})}
          </tbody>
        </table>
        <Pagenation total={this.state.stu.length} count ={this.state.perPage}/>
        </>

    );
    }
  }
export default Propstable