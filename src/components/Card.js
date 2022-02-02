import React, {useState} from 'react';
import classNames from 'classnames';


import { IconSvgSelector } from '../assets/icons/IconsSvgSelector';

function Card({ id, img, name, price, horizontal, cart, onClickFunction, onRemove, onClickFavorite, favorited = false, ...props }) {

	const [isAdded, setIsAdded] = useState(false);
	const [isFavorite, setIsFavorite] = useState(favorited);

	const onClickPlus = () => {
		setIsAdded(!isAdded);
		onClickFunction({ img, name, price });
	}

	const onClickRemove = () => {
		onRemove(id)
	}

	const onFavoriteClick = () => {
		setIsFavorite(!isFavorite);
		onClickFavorite({ img, name, price });
	}

	return (
		<div className={classNames("card", { "card--horizontal": horizontal })}>
			<div
				className="card__btn card__btn--favorite"
				onClick={onFavoriteClick}
			>
				{isFavorite ? <IconSvgSelector id='liked' /> : <IconSvgSelector id='unliked' />}
				
			</div>
			<img src={img} alt="" className="card__img" />
			<div className="card__info">
				<div className="card__title">{name}</div>
				<div className="card__footer">
					<div className="card__price-box">
						<span className="card__price-title">Цена:</span>
						<div className="card__price-value">{price} руб.</div>
					</div>
					<div
						className={classNames("card__btn card__btn--action", { 'active': isAdded })}
						onClick={cart ? onClickRemove : onClickPlus}
					>
						{cart
							? <IconSvgSelector id='btn-remove' />
							: isAdded ? <IconSvgSelector id='btn-checked' /> : <IconSvgSelector id='btn-plus' />
						}

					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
