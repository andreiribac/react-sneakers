import React, { useState } from 'react';
import axios from 'axios';


import { Card, Header, MainGrid, Drawer } from './components';

function App() {

	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [isActiveDrawer, setIsActiveDrawer] = useState(false);

	const toggleDrawer = () => {
		setIsActiveDrawer(!isActiveDrawer);
	}

	React.useEffect(() => {
		// Это все заменятся библиотекой axios
		// fetch('https://61f7e88b39431d0017eafaf6.mockapi.io/items')
		// 	.then((res) => {
		// 		return res.json();
		// 	})
		// 	.then((json) => {
		// 		setItems(json);
		// 	});

		axios.get('https://61f7e88b39431d0017eafaf6.mockapi.io/items')
			.then(res => {
				setItems(res.data);
			});
		axios.get('https://61f7e88b39431d0017eafaf6.mockapi.io/cart')
			.then(res => {
				setCartItems(res.data);
			});
	}, []);

	const onAddToCart = (item) => {
		axios.post('https://61f7e88b39431d0017eafaf6.mockapi.io/cart', item);
		setCartItems(prev => [...prev, item]);
	}

	const onRemoveItem = (id) => {
		axios.delete(`https://61f7e88b39431d0017eafaf6.mockapi.io/cart/${id}`);
		setCartItems(prev => prev.filter(item => item.id !== id));
	}

	const onChangesearchInput = (event) => {
		setSearchValue(event.target.value);
	}

	const onClearSearch = () => {
		setSearchValue('');
	}

	return (
		<>
			<Drawer
				active={isActiveDrawer}
				closeDrawer={toggleDrawer}
				items={cartItems}
				onRemove={onRemoveItem}
			/>
			<div className="wrapper">
				<Header openDrawer={toggleDrawer} />
				<main>
					<MainGrid
						title="все кросовки"
						search
						onChange={onChangesearchInput}
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
										img={item.img}
										name={item.name}
										price={item.price}
										onClickFavorite={() => { console.log(`Добавили в избранное`, item) }}
										onClickFunction={(item) => { onAddToCart(item) }}
									/>
								);
							})}
					</MainGrid>
				</main>
			</div>
		</>
	);
}

export default App;
