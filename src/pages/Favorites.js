import React, { useContext } from 'react';
import { MainGrid, Card } from '../components';

import AppContext from '../context';


function Favorites({  onAddToCart }) {
	
	const { favoritesItems, onAddToFavorites } = useContext(AppContext);

	return (
		<MainGrid
			title="мои закладки"
		>
			{favoritesItems
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
							onClickFavorite={onAddToFavorites}
							onClickFunction={(item) => { onAddToCart(item) }}
						/>
					);
				})}
		</MainGrid>
	);
}

export default Favorites;
