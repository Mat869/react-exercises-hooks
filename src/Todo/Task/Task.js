import React, { useEffect, useState, useRef } from 'react';

function Task(props) {

	return (
		<li>
            {props.task} <button onClick={ () => props.onDelete(props.task)}>Delete</button>
		</li>
	)

}

export default Task;