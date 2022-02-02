import React from 'react';
import { MainGrid, Card } from '../components';

function Home({ onChangeSearchInput, searchValue, onClearSearch, items, onAddToFavorites, onAddToCart }) {
	
	return (
		<MainGrid
			title="все кросовки"
			search
			onChange={onChangeSearchInput}
			searchValue={searchValue}
			onClearSearch={onClearSearch}
		>
			{items
				// filter - реализация показа по поиску он отдает отфильтрованный массив
				.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
				.map((item) => {
					return (
						<Card
							key={item.img}
							// img={item.img}
							// name={item.name}
							// price={item.price}
							{...item}
							onClickFavorite={(item) => { onAddToFavorites(item) }}
							onClickFunction={(item) => { onAddToCart(item) }}
						/>
					);
				})}
		</MainGrid>
	);
}

export default Home;
