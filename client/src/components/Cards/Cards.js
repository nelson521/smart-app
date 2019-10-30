import React from 'react';
import axios from 'axios';
import CardFlip from '../../Pages/CardFlip';

class Cards extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {

  //     };
  //   }
  state = {
    cards: ''
  };

  handleClick = e => {
    e.preventDefault();
    const newState = this.state.cards.map(card => {
      if (card._id === e.target.id) {
        return {
          ...card,
          flipped: !card.flipped
        };
      }
      return card;
    });
    this.setState({
      cards: newState
    });

    // this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  };

  componentDidMount() {
    axios
      .get('/api/words')
      .then(({ data }) => data.map(word => ({ ...word, flipped: false })))
      .then(data => {
        this.setState({
          cards: data
        });
      })
      .catch(err => {});
  }

  render() {
    if (this.state.cards) {
      return this.state.cards.map(card => (
        <CardFlip cardData={card} handleClick={this.handleClick} />
      ));
    }
    return null;
  }
}

export default Cards;
