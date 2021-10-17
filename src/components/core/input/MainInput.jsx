import React from 'react';
import classes from './MainInput.module.css';

const MainInput = (props) => {
	return <input {...props} className={classes.mainInput} />;
};

export default MainInput;
