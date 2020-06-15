import React, { useEffect, useState, useRef } from 'react';
import './Marker.scss';

function Marker () {

	const [list] = useState([
		"First item",
		"Second special item",
		"Third item",
		"Fourth special item",
	]);

	const [toCheck, setToCheck] = useState('');

	let check = (e) => {
		setToCheck(e.target.value)
	}

	var Highlight = require('react-highlighter');


	return (
		<div className="Marker">
			<p>
				Display a list of all items in the state.<br />
				If the value in the input can be found within the items - <span className="marker">marker</span> it.<br />
				Example: if the input value is "elf" then item "shelf" should look like: sh<span className="marker">elf</span>.
				Apply the marker for <u>all items</u>.
			</p>

			<input type="text" placeholder="Text to marker..." onChange={check}/>
			<ul>
					{ list.map((item, index) => {
						return <li key={index}>
									<Highlight search={toCheck}>
										{item}
									</Highlight>
								</li>
					})}
			</ul>
		</div>
	)

}

export default Marker;
