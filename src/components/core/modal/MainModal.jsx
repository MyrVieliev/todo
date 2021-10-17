import React from 'react';
import classes from './MainModal.module.css';

const MainModal = ({ children, visible, setVisible }) => {
	const rootClasses = [classes.mainModal];
	if (visible) {
		rootClasses.push(classes.active);
	}

	return (
		<div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
			<div
				className={classes.mainModalContent}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};

export default MainModal;
