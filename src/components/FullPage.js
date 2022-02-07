import React from 'react';

function FullPage({ children, ...props }) {
	return (
		<div className="full-page">
			<div className="full-page__container">
				{children}
			</div>
		</div>
	);
}

export default FullPage;
