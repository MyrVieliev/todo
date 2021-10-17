import React from 'react';
import TaskFilter from './TaskFilter';

const TasksTitle = ({ filter, setFilter, tasksTitle }) => {
	return (
		<div className='tasks-container__title'>
			<div className='tasks-container__title-title'>{tasksTitle}</div>
			<TaskFilter filter={filter} setFilter={setFilter} />
		</div>
	);
};

export default TasksTitle;
