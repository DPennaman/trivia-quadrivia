import React from 'react';
// import '../styles/character.css';

const Entities = require('html-entities').XmlEntities;
const entities = new Entities();

const buttonStyle = {
	// marginTop: '20px',
	position: 'absolute',
	top: '180px',
	right: '300px',
}

const paragraphStyle = {
	padding: '10px'
}


const Question = props => {
	var question = props.question.question
	return (
		<div>
      <p style={paragraphStyle}>{entities.decode(question)}</p>
			{ props.answer ? <p>{props.question.correct_answer}</p> : null}
			<button style={buttonStyle} onClick={props.handleClick}>Answer</button>
		</div>
	)
}
export default Question;
