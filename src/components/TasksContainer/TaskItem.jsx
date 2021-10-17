import React from 'react';
import MainButton from '../core/button/MainButton';
import trash from '../../img/trash.svg';

function TaskItem(props) {
	return (
		<div className='task-item'>
			<div className='task-item__content'>
				<div className='task-item__content-check'>
					<input
						type='checkbox'
						defaultChecked={props.task.checked}
						onChange={() => props.checkTask(props.task.id, !props.task.checked)}
					/>
				</div>
				<div className='task-item__content-body'>
					<div className='task-item__content-date'>{props.task.date}</div>
					<div className='task-item__content-title'>{props.task.title}</div>
				</div>
			</div>
			<div className='task-item__btns'>
				<MainButton onClick={() => props.remove(props.task)}>
					<img src={trash} alt='Delete' />
				</MainButton>
			</div>
		</div>
	);
}

export default TaskItem;
