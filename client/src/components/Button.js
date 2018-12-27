import React from 'react';
// import QuestionList from './QuestionList';
import Question from './Question';
import axios from 'axios';

class Button extends React.Component {

	state = {
		questions: []
	}

	// async componentDidMount() {
	// 	this.fetchQuestion();
	// }

	// async fetchQuestion(){
	// 	// let randomId = Math.random() * 10;
	// 	// randomId = Math.ceil(randomId)
	// 	let {data} = await axios.get('https://opentdb.com/api.php?amount=1');
	// 	this.setState({
	// 		questions: data.results
	// 	})
  //   console.log(data.results)
	// }

   fetchQuestion = async () => {
    let {data} = await axios.get('https://opentdb.com/api.php?amount=3');
		this.setState({
			questions: data.results
		})
    console.log(this.state.questions)
  }

	render() {
		return (
      <div>
        <button id="button" onClick={this.fetchQuestion}>Get New Question</button>
        <div>
          {this.state.questions.map((question, index) => {
            return <Question question={question} key={index} />
          })}
        </div>
      </div>
    )
  }
}

export default Button;
