import React, { useState } from 'react';
import logo from './logo.svg';
import './Toggle.scss';

function Toggle () {

		const [isShown, setShown] = useState(true);

		return (
			<div className="Toggle">
				<p>Make the logo show and disappear when clicking on the button.</p>
				<button onClick={() => setShown(!isShown)}>Show / Hide</button>
				<div className="Toggle__logo-wrapper">
					{ isShown && <img src={logo} alt="logo" /> /* or { isShown ? <img src={logo} alt="logo" /> : null } */ }
				</div> 
			</div>
		)
}

export default Toggle;
