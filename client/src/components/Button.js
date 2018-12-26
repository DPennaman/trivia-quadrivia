// import React { Component } from 'react';
// // import QuestionList from './QuestionList';
// import axios from 'axios';
//
// class Button extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			questions: []
// 		}
// 		this.fetchQuestion =this.fetchQuestion.bind(this);
// 	}
//
// 	async componentDidMount() {
// 		this.fetchQuestion();
// 	}
//
// 	async fetchQuestion(){
// 		let randomId = Math.random() * 10;
// 		randomId = Math.ceil(randomId)
// 		let {data: question} = await axios.get('https://opentdb.com/api.php?amount=10'+randomId);
// 		this.setState({
// 			questions: [...this.state.questions, question]
// 		})
// 	}
//
// 	render() {
// 		return (
// 			<div><button onClick = {() => this.fetchQuestion()}>Get New Question</button>
// 			<div id="button">
// 				<QuestionList questions={this.state.questions}  fetchQuestion = {this.fetchQuestion}/>
// 			</div>
// 		</div>
// 		)
// 	}
// }
//
// export default Button;
