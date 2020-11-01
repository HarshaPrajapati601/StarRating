import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
state ={
  rating:0
}
starsArray=[];

  // Write a function that returns 5 Star components
 StarRender = ()=>{
  for(let i=0; i<=5;i++){
    this.starsArray.push(i);
  }
 }

  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props. ///****///


  render() {
    return (
      <ul className="course--stars">
        {/* Render the Star components */}
        <Star  />
      </ul>
    );
  }
}

export default StarRating;