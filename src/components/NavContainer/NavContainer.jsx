import React from 'react';
import NavItem from './NavItem';

function NavContainer({ navsTitle }) {
	return (
		<div className='nav-container'>
			{navsTitle.map((navTitle) => (
				<NavItem navTitle={navTitle} key={navTitle.id} />
			))}
			<hr
				style={{
					margin: '0 10px',
					border: '2px solid #39383b',
					borderTop: 'none',
				}}
			/>
		</div>
	);
}

export default NavContainer;
