import React from 'react';
import MainInput from '../core/input/MainInput';
import MainSelect from '../core/select/MainSelect';

const TaskFilter = ({ filter, setFilter }) => {
	return (
		<div className='tasks-container__title-filters'>
			<MainInput
				value={filter.query}
				onChange={(e) => setFilter({ ...filter, query: e.target.value })}
				placeholder='Search'
			/>

			<MainSelect
				value={filter.sort}
				onChange={(selectedSort) =>
					setFilter({ ...filter, sort: selectedSort })
				}
				defaultValue={'Sort by'}
				options={[
					{ value: 'date', name: 'By date' },
					{ value: 'title', name: 'By title' },
				]}
			/>
		</div>
	);
};

export default TaskFilter;
