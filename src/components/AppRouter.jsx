import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AllTasks from './pages/AllTasks';
import Completed from './pages/Completed';
import MyDay from './pages/MyDay';

const AppRouter = ({
	checkTask,
	setTasks,
	removeTask,
	sortedAndSearchedTasks,
	sortedDailyTasks,
	sortedAndCheckedTasks,
}) => {
	return (
		<Switch>
			<Route path='/MyDay'>
				<MyDay
					remove={removeTask}
					tasks={sortedDailyTasks}
					checkTask={checkTask}
				/>
			</Route>
			<Route path='/Completed'>
				<Completed
					remove={removeTask}
					tasks={sortedAndCheckedTasks}
					checkTask={checkTask}
				/>
			</Route>
			<Route path='/AllTasks'>
				<AllTasks
					remove={removeTask}
					tasks={sortedAndSearchedTasks}
					checkTask={checkTask}
				/>
			</Route>
			<Redirect to='AllTasks' />
		</Switch>
	);
};

export default AppRouter;
