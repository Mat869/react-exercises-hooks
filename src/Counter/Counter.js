import React, { useState } from 'react';
import './Counter.scss';

function Counter() {

	const [value, setValue] = useState(0);

	return (
		<div className="Counter">
			<p>Make the button increase the value:</p>
			<button onClick={() => setValue(value + 1)}>Increase</button>
			<div className="Counter__value">{value}</div>
		</div>
	)
}

export default Counter;
