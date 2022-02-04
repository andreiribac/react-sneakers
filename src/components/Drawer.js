import React, { useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';



import { IconSvgSelector } from '../assets/icons/IconsSvgSelector';
import { Card, Button, InfoBox } from '.';
import AppContext from '../context';

import emptyCart from '../assets/img/empty-cart.jpg';
import completeOrder from '../assets/img/complete-order.jpg';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ active, onRemove, items = [], ...props }) {

	const { toggleDrawer, cartItems, setCartItems } = React.useContext(AppContext);
	
	const [orderID, setOrderID] = useState(null);
	const [isOrderComplete, setIsOrderComplete] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	
	const onClickOrder = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.post('https://61f7e88b39431d0017eafaf6.mockapi.io/orders', {
				items: cartItems
			});
			setOrderID(data.id);
			setIsOrderComplete(true);
			setCartItems([]);
			for (let i = 0; i < cartItems.length; i++) {
				const item = cartItems[i];
				await axios.delete('https://61f7e88b39431d0017eafaf6.mockapi.io/cart/' + item.id);
				await delay(1000);
			}
			setIsOrderComplete(false);
		} catch (error) {
			alert('Ошибка при создании заказа')
		}
		setIsLoading(false);
	}

	return (
		<div className={classNames("drawer", { 'active': active })}>
			<div className="overlay"></div>
			<div className="drawer__body">
				<div className="drawer__title">
					<h3>Корзина</h3>
					<IconSvgSelector id='btn-remove' onClick={toggleDrawer} />
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
							<Button disabled={isLoading} onClick={onClickOrder} large>
								Оформить заказ
							</Button>
						</div>
					</div>
					: <InfoBox
						img={isOrderComplete ? completeOrder : emptyCart}
						title={isOrderComplete? 'Заказ оформлен': 'Корзина пустая'}
						description={isOrderComplete ? `Ваш заказ #${orderID} скоро будет передан курьерской доставке`:'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
					/>
					}

			</div>
		</div>
	);
}

export default Drawer;
