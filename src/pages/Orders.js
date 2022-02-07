import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { InfoBox, MainGrid, FullPage, Card } from '../components';

import emptyCart from '../assets/img/empty-cart.jpg';

function Orders({ }) {

	const [orders, setOrders] = useState([]);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get('https://61f7e88b39431d0017eafaf6.mockapi.io/orders');
			console.log('data: ', data);
			setOrders(data);
		})();

	}, []);

// TODO 54.41 https://www.youtube.com/watch?v=C_3ZT7j1_jc&list=PL0FGkDGJQjJEos_0yVkbKjsQ9zGVy3dG7&index=8
	return (
		<>
			{orders
				? (
					<MainGrid
						title="мои заказы"
					>
						{orders
							.map((item) => {
								return (
									<Card
										key={item.id}
										{...item}
									// onClickFavorite={onAddToFavorites}
									// onClickFunction={(item) => { onAddToCart(item) }}
									/>
								);
							})
						}
					</MainGrid>
				) : (
					<FullPage>
						<InfoBox
							img={emptyCart}
							title={"У вас нет заказов"}
							description={"Вы нищеброд? Оформите хотя бы один заказ."}
						/>
					</FullPage>
				)
			}
		</>
	);
}

export default Orders;
