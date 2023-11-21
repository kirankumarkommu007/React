import React, { Component } from 'react';
class MyCount extends Component{
    state ={
        counter :0,
        tags:["tag1", "tag2", "tag3"],
        emp:[
            {
                "id": 101,
                "name": "Abdul",
                "dept": "IT",
                "salary":45000
            },
            {
                "id": 102,
                "name": "John",
                "dept": "Sales",
                "salary":25000
            },
            {
                "id": 103,
                "name": "Ramu",
                "dept": "Admin",
                "salary":15000
            },
        ]
    }

    getCountval(){
    return this.state.counter==0? "Zero":this.state.counter;
    }
    
    render(){
        return(
      <div>
        <span className='badge bg-warning'>{this.getCountval()} </span>
        <table class="table" border>
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">dept</th>
      <th scope="col">salary</th>
    </tr>
  </thead>
  <tbody>
   {this.state.emp.map((data)=>{
    return(
        <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.dept}</td>
            <td>{data.salary}</td>
        </tr>
    )
   })}
  </tbody>
</table>
            
      </div>
        );
    }

}
export default MyCount;