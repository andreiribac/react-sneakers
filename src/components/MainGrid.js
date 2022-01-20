import React from 'react';

function MainGrid({ title, children, ...props }) {
	return (
		<div className="main-grid">
			<div className="main-grid__header">
				<h2>{title}</h2>
			</div>
			<div className="main-grid__grid">
				{children}
			</div>
		</div>
	);
}

export default MainGrid;
