import React from 'react';
import Question from './Question';
import axios from 'axios';

class Button extends React.Component {

	state = {
		questions: [],
		answer: false
	}

   fetchQuestion = async () => {
    let {data} = await axios.get('https://opentdb.com/api.php?amount=1');
		this.setState({
			questions: data.results,
			answer: false
		})
    console.log(this.state.questions)
  }

	handleClick = (e) => {
		if(this.state.answer === false){
			this.setState({answer: true})
		} else {
			this.setState({answer: false})
		}

	}

	render() {
		return (
      <div>
        <button id="button" onClick={this.fetchQuestion}>Get New Question</button>
        <div>
          {this.state.questions.map((question, index) => {
            return <Question handleClick={this.handleClick} answer={this.state.answer} question={question} key={index} />
          })}
        </div>
      </div>
    )
  }
}

export default Button;
