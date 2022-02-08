import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { InfoBox, MainGrid, FullPage, Card } from '../components';

import emptyCart from '../assets/img/empty-cart.jpg';
import AppContext from '../context';

function Orders({ }) {

	const { onAddToFavorites, onAddToCart } = useContext(AppContext);
	const [orders, setOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get('https://61f7e88b39431d0017eafaf6.mockapi.io/orders');
				setOrders(data);
				setIsLoading(false);

				// Из урока
				// console.log(data.map((obj)=>obj.items).flat());
				// setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
				// setIsLoading(false);
			} catch (error) {
				alert('Ошибка при запросе заказа')
				console.error('error: ', error);
			}

		})();

	}, []);

	return (
		<>
			{orders
				? (
					<>
						{/* Мой способ выводить заказы как отдельный заказ в котором есть перечень товаров */}
						{orders.map((obj) => {
							return (
								<MainGrid
									title={`Ваш заказа №${obj.id}`}
									key={obj.id}
								>
									{obj.items
										.map((item) => {
											return (
												<Card
													key={item.id}
													{...item}
													onClickFavorite={onAddToFavorites}
													onClickFunction={(item) => { onAddToCart(item) }}
												/>
											);
										})
									}
								</MainGrid>
							)
						})}
					</>

					
					// <>
					// 	{/* Способо из урока - выведение товаров всей кучей, без разделения товаров */}
					// 	<MainGrid
					// 		title={`Ваши заказы`}
					// 	>
					// 		{(isLoading ? [...Array(10)] : orders)
					// 			.map((item, index) => {
					// 				return (
					// 					<Card
					// 						key={index}
					// 						{...item}
					// 						loading={isLoading}
					// 						onClickFavorite={onAddToFavorites}
					// 						onClickFunction={(item) => { onAddToCart(item) }}
					// 					/>
					// 				);
					// 			})
					// 		}
					// 	</MainGrid>
					// </>
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
