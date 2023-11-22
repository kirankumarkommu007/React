import React, { Component } from 'react';
class MapComponent extends Component {
    state = {
        counter: 111,
        cities:["Delhi","HYD","BNG","Mumbai"],
        cid:["12","150","56","65"]
    }
    getBadgeDanger() {
        return "badge bg-danger";
    }
    render() { 
        return (
            <div>
            <div className="badge bg-success">{this.state.counter}</div>
          {this.state.cities.map((k)=>

            <h1>City Name is-------{k}</h1>
          )}
           {this.state.cid.map((l)=>
           <h1>City id is ----{l}</h1>)}
            </div>
            
            
            );
    }
}
 
export default MapComponent;