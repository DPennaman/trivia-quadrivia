import React from 'react';
// import '../styles/character.css';

const buttonStyle = {
	// marginTop: '20px',
	position: 'absolute',
	top: '140px',
	right: '300px',
}

const Question = props => {
	return (
		<div>
      <p>{props.question.question}</p>
			{ props.answer ? <p>{props.question.correct_answer}</p> : null}
			<button style={buttonStyle} onClick={props.handleClick}>Answer</button>
		</div>
	)
}

export default Question;
