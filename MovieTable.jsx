import React, { Component } from 'react'
import movie from './data'
 class MovieTable extends Component {
    state={
        list:movie
    }

    deleteMovie = Del => {
      console.log(" clicked....." + Del.title);
      const filtermovie = this.state.list.filter(eachmovie => eachmovie.title != Del.title)
      this.setState({list:filtermovie})
    }
  render() {
    return (
      <>
    <table class="table">
    <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Year</th>
      <th scope="col">Poster</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
        {this.state.list.map((da)=>{
            return(
            <tr>
            <td>{da.title}</td>
            <td>{da.year}</td>
            <td><img src={da.image} style={{width:"100px",height:"100px"}}/></td>
            <td><button onClick={() => this.deleteMovie(da)} className='btn btn-warning'>Delete</button></td>
          </tr>
        )})}
    <tr>
      
    </tr>
  
  </table>
      </>
    )
  }
}
export default MovieTable;