import React from 'react';
import { MainGrid, Card } from '../components';

function Favorites({ items, onAddToFavorites, onAddToCart }) {
	return (
		<MainGrid
			title="мои закладки"
		>
			{items
				// filter - реализация показа по поиску он отдает отфильтрованный массив
				// .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
				.map((item) => {
					return (
						<Card
							favorited={true}
							key={item.id}
							// id={item.id}
							// img={item.img}
							// name={item.name}
							// price={item.price}
						// Все закоментированные свойства можно заменить на {...item}
							{...item}
							onClickFavorite={(item) => { onAddToFavorites(item) }}
							onClickFunction={(item) => { onAddToCart(item) }}
						/>
					);
				})}
		</MainGrid>
	);
}

export default Favorites;
