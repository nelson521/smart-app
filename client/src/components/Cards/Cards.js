import React from 'react';
import axios from 'axios';
import CardFlip from "../../Pages/CardFlip"


class Cards extends React.Component {
    
  
  // constructor(props) {
  //     super(props);
  //     this.state = {
        
  //     };
  //   }
  state = {} 
  
  componentDidMount() {
    axios.get("http://localhost:3000/api/words")
    .then(({ data }) => {
      this.setState({
        cards: data
      })
    })
    .catch((err) => {})
  }

  render() {
    console.log(this.state)
    return (
      <CardFlip cardData={this.state.cards}/>
    )
    
    }
}

export default Cards;
