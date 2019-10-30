import React from 'react';
import ReactCardFlip from 'react-card-flip';
import YOUR_BACK_COMPONENT from '../components/BackComponent/index';
import YOUR_FRONT_CCOMPONENT from '../components/FrontComponent';
import words from '../components/Json/words';
import Dictionary from '../components/Dictionary/Dictionary';

class CardFlip extends React.Component {
  constructor(props) {
    super(props);
    //   this.state = {
    //   isFlipped: false
    // };
  }

  // handleClick(e) {
  //   e.preventDefault();
  //   this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  // }

  render() {
    const { _id, word, definition, flipped } = this.props.cardData;
    return (
      <ReactCardFlip isFlipped={flipped} flipDirection="vertical" id={_id}>
        <YOUR_FRONT_CCOMPONENT key="front">
          <h1>{word}</h1>
          <button id={_id} onClick={this.props.handleClick}>
            Click to flip
          </button>
        </YOUR_FRONT_CCOMPONENT>

        <YOUR_BACK_COMPONENT key="back">
          {definition}
          <button id={_id} onClick={this.props.handleClick}>
            Click to flip
          </button>
        </YOUR_BACK_COMPONENT>
      </ReactCardFlip>
    );
  }
}

export default CardFlip;
