import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state ={
    rating:0
  }


  // Write a function that returns 5 Star components
  StarRender = ()=>{
    let starsArray=[];
    for(let i=0; i<5;i++){
      starsArray.push(
        <Star key={i}
         starUpdate={()=>this.handleSetRating(i+1)}
         isSelected={this.state.rating > i}
        />
      );
    }
    return starsArray;
  }

  // Write an event handler that updates the rating state.
  handleSetRating =(rating)=>{
    if(this.state.rating === rating) //if 4selected === 4 desected
      {
        this.setState({
          rating:0
        })
      }else{
        this.setState({
          rating:rating
        })
      }
 
  }
  // Pass the function to a Star component via props. ///****///


  render() {
    return (
      <ul className="course--stars">
        {/* Render the Star components */}
        {this.StarRender()}
      </ul>
    );
  }
}

export default StarRating;