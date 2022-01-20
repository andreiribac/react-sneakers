import React from 'react';
import Classnames from 'classnames';


function Button({ children, large, ...props }) {
	return (
		<button
			{...props}
			className={Classnames("btn", { "btn--large": large })}
		>
			{children}
		</button>
	);
}

export default Button;
