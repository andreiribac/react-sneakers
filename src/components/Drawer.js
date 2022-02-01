import React from 'react';
import classNames from 'classnames';


import { IconSvgSelector } from '../assets/icons/IconsSvgSelector';
import { Card, Button } from '.';

import emptyCart from '../assets/img/empty-cart.jpg';



function Drawer({ active, closeDrawer, onRemove, items = [], ...props }) {
	return (
		<div className={classNames("drawer", { 'active': active })}>
			<div className="overlay"></div>
			<div className="drawer__body">
				<div className="drawer__title">
					<h3>Корзина</h3>
					<IconSvgSelector id='btn-remove' onClick={closeDrawer} />
				</div>
				{items.length
					? <div className="drawer__card-container">
						<div className="drawer__card-list">
							{items.map((el) => {
								return (
									<Card
										key={el.img}
										cart
										horizontal
										img={el.img}
										name={el.name}
										price={el.price}
										onRemove={() => onRemove(el.id)}
									/>
								)
							})}
						</div>
						<div className="drawer__card-total">
							<div className="drawer__total-info">
								<span>Итого:</span>
								<div className="drawer__total-line"></div>
								<b>21 498 руб руб</b>
							</div>
							<div className="drawer__total-info">
								<span>Налог 5%:</span>
								<div className="drawer__total-line"></div>
								<b>1074 руб</b>
							</div>
							<Button large>
								Оформить заказ
							</Button>
						</div>
					</div>
					: <div className='drawer__info-box'>
						<img className='drawer__info-img' src={emptyCart} alt="" />
						<div className="h3">Корзина пустая</div>
						<p className='drawer__info'>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
						<Button large onClick={closeDrawer}>
							Вернуться назад
						</Button>
					</div>
					}

			</div>
		</div>
	);
}

export default Drawer;
