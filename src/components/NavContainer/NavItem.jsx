import React from 'react';
import { Link } from 'react-router-dom';

export default function NavItem(props) {
	return (
		<Link to={props.navTitle.link}>
			<div className='nav-container__item'>
				<div className='nav-container__item-title'>{props.navTitle.title}</div>
				<div className='nav-container__item-counter'>
					{props.navTitle.counter}
				</div>
			</div>
		</Link>
	);
}
