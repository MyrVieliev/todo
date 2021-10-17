import { useMemo } from 'react';

export const useSortedCheckedTasks = (tasks, sort) => {
	const sortedTasks = useMemo(() => {
		if (sort) {
			return [...tasks.filter((x) => x.checked)].sort((a, b) =>
				a[sort].localeCompare(b[sort])
			);
		}
		return tasks.filter((x) => x.checked);
	}, [sort, tasks]);

	return sortedTasks;
};

export const useCheckedTasks = (tasks, sort, query) => {
	const sortedTasks = useSortedCheckedTasks(tasks, sort);

	const sortedAndCheckedTasks = useMemo(() => {
		return sortedTasks.filter((task) =>
			task.title.toLowerCase().includes(query.toLowerCase())
		);
	}, [query, sortedTasks]);

	return sortedAndCheckedTasks;
};
