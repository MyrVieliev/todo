import React, { useState } from 'react';
import MainButton from '../core/button/MainButton';
import MainInput from '../core/input/MainInput';
// import Localbase from 'localbase';

const TaskForm = ({ create }) => {
	const [task, setTask] = useState({ checked: false, date: '', title: '' });
	const addNewTask = (e) => {
		e.preventDefault();
		const newTask = {
			...task,
			id: uuidv4(),
		};

		if (task.title !== '' && task.date !== '') {
			create(newTask);
			setTask({ checked: false, date: '', title: '' });
		} else {
			alert('Fill out all fields');
		}
	};

	function uuidv4() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
			/[xy]/g,
			function (c) {
				var r = (Math.random() * 16) | 0,
					v = c === 'x' ? r : (r & 0x3) | 0x8;
				return v.toString(16);
			}
		);
	}

	return (
		<form>
			<MainInput
				value={task.title}
				onChange={(e) => setTask({ ...task, title: e.target.value })}
				type='text'
				placeholder='Task title'
			/>
			<MainInput
				value={task.date}
				onChange={(e) => setTask({ ...task, date: e.target.value })}
				type='date'
			/>
			<MainButton onClick={addNewTask}>Create task</MainButton>
		</form>
	);
};

export default TaskForm;
