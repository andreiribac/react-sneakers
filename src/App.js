import React, { useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from "react-router-dom";


import { Header, Drawer } from './components';
import { Home, Favorites } from './pages';


function App() {

	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [favoritesItems, setFavoritesItems] = useState([]);
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
		axios.get('https://61f7e88b39431d0017eafaf6.mockapi.io/favorites')
			.then(res => {
				setFavoritesItems(res.data);
			});
	}, []);

	const onAddToCart = (item) => {
		axios.post('https://61f7e88b39431d0017eafaf6.mockapi.io/cart', item);
		setCartItems(prev => [...prev, item]);
	}

	const onAddToFavorites = (item) => {
		axios.post('https://61f7e88b39431d0017eafaf6.mockapi.io/favorites', item);
		setFavoritesItems(prev => [...prev, item]);
	}

	const onRemoveItem = (id) => {
		axios.delete(`https://61f7e88b39431d0017eafaf6.mockapi.io/cart/${id}`);
		setCartItems(prev => prev.filter(item => item.id !== id));
	}

	const onChangeSearchInput = (event) => {
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
					<Routes>
						<Route path="/"
							element={
								<Home
									onChangeSearchInput={onChangeSearchInput}
									searchValue={searchValue}
									onClearSearch={onClearSearch}
									items={items}
									onAddToFavorites={onAddToFavorites}
									onAddToCart={onAddToCart}
								/>
							}
						/>
						<Route path="/favorites"
							element={
								<Favorites
									items={favoritesItems}
									onAddToFavorites={onAddToFavorites}
									onAddToCart={onAddToCart}
								/>
							}
						/>
					</Routes>
					
				</main>
			</div>
		</>
	);
}

export default App;
