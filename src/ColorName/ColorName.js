import React, { useState, useRef } from 'react';
import './ColorName.scss';

function ColorName() {

		const [color, setColor] = useState('');

		const myInput = useRef();

		return (
			<div className="ColorName">
				<p>
					Create a new component named <code>Colorize</code> under this component.
					The component should receive a prop with a color name (like "blue") and present the word with the corresponding color.<br /><br />
					Examples: <span className="color--red">red</span> <span className="color--blue">blue</span>
				</p>

				{ <input ref={myInput} onChange={() => setColor(myInput.current.value)}></input> }
				<p style={{color: `${color}`}}>{color}</p>
			</div>
		)
}

export default ColorName;
