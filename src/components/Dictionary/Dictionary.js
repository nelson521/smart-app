import React from 'react';
import axios from 'axios';


export default class Dictionary extends React.Component {

  state = {
    words: [],
  };

  componentDidMount() {
    axios.get("https://dictionaryapi.com/api/v3/references/collegiate/json/hope?key=d37a11a3-1cb2-470c-8dc0-465d9aa55a54")
    .then(res => {
      console.log(res);
      this.setState({words: res.data});
    });
  }

  render() {
    return (
      <div>
        {this.state.words.map((word, i) => <li key={i}>{word.id} </li>)}
      </div>
    )
  }
  
}
