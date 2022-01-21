import React from 'react';
import classNames from 'classnames';


function Button({ children, large, ...props }) {
	return (
		<button
			{...props}
			className={classNames("btn", { "btn--large": large })}
		>
			{children}
		</button>
	);
}

export default Button;
