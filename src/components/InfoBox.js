import React from 'react';
import { Button } from '.';
import AppContext from '../context';

function InfoBox({ title, img, description, btnText }) {
	
	const { toggleDrawer} = React.useContext(AppContext);

	return (
		<div className='info-card'>
			<img className='info-card__img' src={img} alt="" />
			<div className="h3">{title}</div>
			<p className='info-card__info'>{description}</p>
			<Button large onClick={toggleDrawer}>
				Вернуться назад
			</Button>
		</div>
	);
}

export default InfoBox;
