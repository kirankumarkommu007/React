import React, { Component } from 'react';
import _ from 'lodash';
class Pagenation extends Component{
    render(){
        const Tot = this.props.total;
        const perpage=this.props.count;
        const len = Tot/perpage;
        const k =  _.range(1, len+1);
        return(
            <nav aria-label="Page navigation example">
            <ul class="pagination">
            {k.map((h)=>
            <li class="page-item" key={h}><a class="page-link" href="#">{h}</a></li>
            )}
         </ul>
        </nav>
        )
    }
}
export default Pagenation;