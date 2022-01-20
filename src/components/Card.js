import React from 'react';
import classNames from 'classnames';


import { IconSvgSelector } from '../assets/icons/IconsSvgSelector';

function Card({ img, title, price, horizontal, ...props}) {
	return (
		<div className={classNames("card",  {"card--horizontal" : horizontal})}>
			<div className="card__btn card__btn--favorite">
				<IconSvgSelector id='heart' />
			</div>
			<img src={img} alt="" className="card__img" />
			<div className="card__info">
				<div className="card__title">{title}</div>
				<div className="card__footer">
					<div className="card__price-box">
						<span className="card__price-title">Цена:</span>
						<div className="card__price-value">{price} руб.</div>
					</div>
					<div className="card__btn card__btn--action">
						<IconSvgSelector id='plus' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
