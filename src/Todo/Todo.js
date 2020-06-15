import React, { useEffect, useState, useRef } from 'react';
import './Todo.scss';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from './Task/Task';
import TaskContext from './task-context';

function Todo() {

	const [tasks, setTasks] = useState([]);

	let addTask = (task) => {
		console.log(task);
		setTasks([...tasks, task]);
	}

	let deleteTask = (taskToDel) => {
		console.log(taskToDel);
		setTasks(tasks.filter(task => task !== taskToDel))
	}

	return (
		<div className="Todo">
			<h3>Todo List:</h3>
			<p>Make a Todo list (add & delete options):</p>
			<TaskContext.Provider value={{
					tasks: tasks,
					setTasks: setTasks
			}}>
				<AddTaskForm onAdd={addTask} />
				{tasks.map((task, index) => {
					return <Task key={index} 
							task={task}
							index={index}
							onDelete={deleteTask} />
				})}
			</TaskContext.Provider>
		</div>
	)

}

export default Todo;
