import { useMemo } from 'react';

export const useDailyTasks = (tasks, sort) => {
	const sortedTasks = useMemo(() => {
		const today =
			new Date().getFullYear() +
			'-' +
			('0' + (new Date().getMonth() + 1)).slice(-2) +
			'-' +
			('0' + new Date().getDate()).slice(-2);

		if (sort) {
			return [...tasks.filter((x) => x.date === today)].sort((a, b) =>
				a[sort].localeCompare(b[sort])
			);
		}
		return tasks.filter((x) => x.date === today);
	}, [sort, tasks]);

	return sortedTasks;
};

export const useCheckedTasks = (tasks, sort, query) => {
	const sortedTasks = useDailyTasks(tasks, sort);

	const sortedAndCheckedTasks = useMemo(() => {
		return sortedTasks.filter((task) =>
			task.title.toLowerCase().includes(query.toLowerCase())
		);
	}, [query, sortedTasks]);

	return sortedAndCheckedTasks;
};
