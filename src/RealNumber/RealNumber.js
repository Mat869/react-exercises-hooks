import React, { useEffect, useState, useRef } from 'react';
import './RealNumber.scss';

function RealNumber() {

	const [isShown, setIsShown] = useState(false)

	let myInput = useRef();

	let check = () => {
		let value = myInput.current.value;
		if(isNaN(value)) {
			setIsShown(false)
		} else if(!isNaN(value)) {
			setIsShown(true)
		}
	}

	return (
		<div className="RealNumber">
			<p>
				The button near the input should be visible only if the input contains <u>only</u> numbers.
				Examples:<br />
				"238764" - <span className="value--valid">valid</span> <br />
				"A13" - <span className="value--invalid">invalid</span>
			</p>

			<input type="text" className="text-box" ref={myInput} onChange={check}/>
			{ isShown && <button>Submit</button> }
		</div>
	)

}

export default RealNumber;
