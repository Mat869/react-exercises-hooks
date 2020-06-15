import React, { useEffect, useState } from 'react';
import './Timer.scss';

function Timer() {

	const [value, setValue] = useState(0);
	
	
	useEffect(() => {
		let interval = setInterval(() => {
			tick()
		}, 1000)

		return ( function clean() {
			clearInterval(interval)
			}
		)

	}, [value]);

	const tick = () => {
		setValue(value + 1)
	}

	return (
		<div className="Timer">
			<h3>Timer</h3>
			<p>
				Make a timer that counts the seconds.
				Update it every second.
			</p>
			<div className="Timer__value">{value}</div>
		</div>
	)
}

export default Timer;
