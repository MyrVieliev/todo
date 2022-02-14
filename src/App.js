import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavContainer from './components/NavContainer/NavContainer';
import TasksContainer from './components/TasksContainer/TasksContainer';
import Localbase from 'localbase';

import './styles/css/App.min.css';

function App() {
	const [tasks, setTasks] = useState([]);
	let db = new Localbase('db');

	const today =
		new Date().getFullYear() +
		'-' +
		('0' + (new Date().getMonth() + 1)).slice(-2) +
		'-' +
		('0' + new Date().getDate()).slice(-2);

	const navsTitle = [
		{
			id: 'myDay',
			title: 'My day',
			counter: tasks.filter((x) => x.date === today).length,
			link: '/MyDay',
		},
		{
			id: 'Completed',
			title: 'Completed',
			counter: tasks.filter((x) => x.checked).length,
			link: 'Completed',
		},
		{
			id: 'allTasks',
			title: 'All Tasks',
			counter: tasks.length,
			link: '/AllTasks',
		},
	];

	return (
		<BrowserRouter>
			<NavContainer navsTitle={navsTitle} />
			<TasksContainer tasks={tasks} setTasks={setTasks} db={db} />
		</BrowserRouter>
	);
}

export default App;
