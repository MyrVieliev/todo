import React, { useEffect, useState } from 'react';
import MainButton from '../core/button/MainButton';
import MainModal from '../core/modal/MainModal';
import TaskForm from './TaskForm';
import TasksTitle from './TasksTitle';
import { useTasks } from '../../hooks/useTasks';
import AppRouter from '../AppRouter';
import { useCheckedTasks } from '../../hooks/useCheckedTasks';
import { useDailyTasks } from '../../hooks/useDailyTasks';

function TasksContainer({ tasks, setTasks, db }) {
	const [modal, setModal] = useState(false);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const sortedAndSearchedTasks = useTasks(tasks, filter.sort, filter.query);
	const sortedDailyTasks = useDailyTasks(tasks, filter.sort, filter.query);
	const sortedAndCheckedTasks = useCheckedTasks(
		tasks,
		filter.sort,
		filter.query
	);

	const createTask = (newTask) => {
		db.collection('tasksStorage').add(newTask);
		setTasks([...tasks, newTask]);
		setModal(false);
	};
	db.config.debug = false;

	async function getAllTasksFromDB() {
		const responce = await db.collection('tasksStorage').get();
		setTasks(responce);
	}

	const checkTask = (taskId, checked) => {
		let elements = [...tasks];

		elements.forEach((element, index) => {
			if (element.id === taskId) {
				elements[index].checked = checked;
				db.collection('tasksStorage').doc({ id: element.id }).update({
					checked: element.checked,
				});
			}
		});
		setTasks(elements);
	};

	const removeTask = (task) => {
		setTasks(tasks.filter((p) => p.id !== task.id));
		db.collection('tasksStorage').doc({ id: task.id }).delete();
	};

	useEffect(() => {
		getAllTasksFromDB();
	}, []);

	return (
		<div className='tasks-container'>
			<MainModal visible={modal} setVisible={setModal}>
				<TaskForm create={createTask} />
			</MainModal>

			<TasksTitle filter={filter} setFilter={setFilter} tasksTitle={`ToDo's`} />

			<AppRouter
				checkTask={checkTask}
				setTasks={setTasks}
				removeTask={removeTask}
				sortedDailyTasks={sortedDailyTasks}
				sortedAndCheckedTasks={sortedAndCheckedTasks}
				sortedAndSearchedTasks={sortedAndSearchedTasks}
			/>

			<MainButton
				style={{
					fontSize: '45px',
					fontWeight: '700',
					alignSelf: 'flex-end',
					padding: '5px 30px 10px'
				}}
				onClick={() => setModal(true)}
			>
				+
			</MainButton>
		</div>
	);
}

export default TasksContainer;
