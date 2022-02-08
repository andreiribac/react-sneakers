import React, { useState } from 'react';
import classNames from 'classnames';
import ContentLoader from "react-content-loader";

import AppContext from '../context';


import { IconSvgSelector } from '../assets/icons/IconsSvgSelector';

function Card({
	id, parentId, img, name,
	price, horizontal, cart,
	onClickFunction, onRemove,
	onClickFavorite,
	favorited = false,
	loading = false,
	...props }) {
	const { isItemAdded } = React.useContext(AppContext);
	// const [isAdded, setIsAdded] = useState(added);
	const [isFavorite, setIsFavorite] = useState(favorited);
	const itemObj = { id, parentId: id, img, name, price }

	const onClickPlus = () => {
		onClickFunction(itemObj);
		// setIsAdded(!isAdded);
	}


	const onClickRemove = () => {
		onRemove(id)
	}

	const onFavoriteClick = () => {
		onClickFavorite(itemObj);
		setIsFavorite(!isFavorite);
	}

	return (
		<div className={classNames("card", { "card--horizontal": horizontal })}>
			{loading
				? <ContentLoader
					speed={2}
					width={170}
					height={272}
					viewBox="0 0 170 272"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb"
					{...props}
				>
					<circle cx="85" cy="80" r="58" />
					<rect x="5" y="159" rx="0" ry="0" width="162" height="34" />
					<rect x="0" y="217" rx="6" ry="6" width="80" height="33" />
					<rect x="129" y="216" rx="7" ry="7" width="32" height="32" />
					<rect x="198" y="440" rx="0" ry="0" width="20" height="6" />
				</ContentLoader>
				: <>
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
								className={classNames("card__btn card__btn--action", { 'active': isItemAdded(id) })}
								onClick={cart ? onClickRemove : onClickPlus}
							>
								{cart
									? <IconSvgSelector id='btn-remove' />
									: isItemAdded(id) ? <IconSvgSelector id='btn-checked' /> : <IconSvgSelector id='btn-plus' />
								}

							</div>
						</div>
					</div>
				</>

			}


		</div>
	);
}

export default Card;
