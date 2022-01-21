import React from 'react';

import { IconSvgSelector } from '../assets/icons/IconsSvgSelector';

function MainGrid({ title, children, back, search, ...props }) {
	return (
		<div className="main-grid">
			<div className="main-grid__header">
				{back && 
					<div className='action-btn'>btn</div>
				}
				<h2>{title}</h2>
				{search && 
					<div className='search'>
						<label className="search__label">
							<input className='search__input' type="text" placeholder='Поиск' />
							<IconSvgSelector id="search" className='search__img' />
						</label>
					</div>
				}
			</div>
			<div className="main-grid__grid">
				{children}
			</div>
		</div>
	);
}

export default MainGrid;
