import React, { useRef, useContext } from 'react';

function AddTaskForm(props) {

    let myInput = useRef();

    let addTask = (e) => {
        e.preventDefault();
        let task = myInput.current.value;
        props.onAdd(task);
        e.target.reset();
    }

	return (
		<div>
            <form onSubmit={addTask}>
                <input placeholder="Your task..." ref={myInput} /> <button>Add task</button>
            </form>
		</div>
	)

}

export default AddTaskForm;