import React from 'react';

import { IconSvgSelector } from '../assets/icons/IconsSvgSelector';

function MainGrid({ title, children, back, search, onChange, searchValue, onClearSearch, ...props }) {
	return (
		<div className="main-grid">
			<div className="main-grid__header">
				{back &&
					<div className='action-btn'>btn</div>
				}
				<h2>{searchValue ? `Поиск по запросу: ${searchValue}` : title}</h2>
				{search &&
					<div className='search'>
						<label className="search__label">
							<input
								onChange={onChange}
								className='search__input'
								type="text"
								placeholder='Поиск'
								value={searchValue}
							/>
							<IconSvgSelector id="search" className='search__img' />
						</label>
						{searchValue && <IconSvgSelector onClick={onClearSearch} id="btn-remove" className='search__close-img' /> }
						
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
