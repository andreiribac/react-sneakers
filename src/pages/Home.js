import React from 'react';
import { MainGrid, Card } from '../components';

function Home({
	cartItems,
	onChangeSearchInput,
	searchValue,
	onClearSearch,
	items,
	onAddToFavorites,
	onAddToCart,
	isLoading
}) {
	
	const renderItems = () => {
		// filter - реализация показа по поиску он отдает отфильтрованный массив
		const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
		return (
			(isLoading ? [...Array(10)] : filteredItems)
				.map((item, index) => {
					return (
						<Card
							loading={isLoading}
							key={index}
							// img={item.img}
							// name={item.name}
							// price={item.price}
							{...item}
							added={cartItems.some(obj => obj.id === item.id)}
							onClickFavorite={(item) => { onAddToFavorites(item) }}
							onClickFunction={(item) => { onAddToCart(item) }}
						/>
					);
				})
		);
	}

	return (
		<MainGrid
			title="все кросовки"
			search
			onChange={onChangeSearchInput}
			searchValue={searchValue}
			onClearSearch={onClearSearch}
		>
			{renderItems()}
		</MainGrid>
	);
}

export default Home;
