import React from 'react';
import ReactCardFlip from 'react-card-flip';
import YOUR_BACK_COMPONENT from '../components/BackComponent/index';
import YOUR_FRONT_CCOMPONENT from '../components/FrontComponent';
import words from '../components/Json/words';
import Dictionary from '../components/Dictionary/Dictionary'

class CardFlip extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
 
  render() {
    return (
      <>
        {this.props.cardData && this.props.cardData.map(card => {
          return (
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" id={card._id}>
            <Dictionary />
            <YOUR_FRONT_CCOMPONENT key="front">
              <h1>{card.word}</h1>
              <button onClick={this.handleClick}>Click to flip</button>
            </YOUR_FRONT_CCOMPONENT>
    
            <YOUR_BACK_COMPONENT key="back">
              {card.definition}
              <button onClick={this.handleClick}>Click to flip</button>
            </YOUR_BACK_COMPONENT>
          </ReactCardFlip>
          )
        })}
      </>
    )
  }
}

export default CardFlip;

