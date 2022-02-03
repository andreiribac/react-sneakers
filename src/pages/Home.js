import React, { useContext } from 'react';
import { MainGrid, Card } from '../components';
// import AppContext from '../context';

function Home({
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
							key={item ? item.id : index}
							// img={item.img}
							// name={item.name}
							// price={item.price}
							{...item}
							// added={isItemAdded(item && item.id)}
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
