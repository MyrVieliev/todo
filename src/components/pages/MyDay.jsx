import React from 'react';
import TaskItem from '../TasksContainer/TaskItem';

const MyDay = ({ tasks, remove, checkTask }) => {
	if (!tasks.length) {
		return <div className='tasks-container__cr'>Empty list</div>;
	}

	return (
		<div className='tasks-container__list'>
			{tasks.map((task) => (
				<TaskItem
					remove={remove}
					task={task}
					key={task.id}
					checkTask={checkTask}
				/>
			))}
		</div>
	);
};

export default MyDay;
