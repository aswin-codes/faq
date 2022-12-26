import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props
	const [isVisible, setIsVisible] = useState(false);

    function changeVisibility(){
        setIsVisible(a => !a);
    }

	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				<button onClick={changeVisibility} className="btn">{ isVisible ? "-" : "+"}</button>
			</header>
			
			<p>{isVisible ? info : "" }</p>
		</article>
	)
}

export default Question
