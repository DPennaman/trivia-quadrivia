import React from 'react';
// import '../styles/character.css';

const Question = props => {
	return (
		<div>
      <p>{props.question.question}</p>
			{ props.answer ? <p>{props.question.correct_answer}</p> : null}
			<button onClick={props.handleClick}>Answer</button>
		</div>
	)
}

export default Question;
