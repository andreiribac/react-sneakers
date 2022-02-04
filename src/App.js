import React, { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";


import { Header, Drawer } from './components';
import { Home, Favorites } from './pages';

import AppContext from './context';



function App() {

	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [favoritesItems, setFavoritesItems] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [isActiveDrawer, setIsActiveDrawer] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const toggleDrawer = () => {
		setIsActiveDrawer(!isActiveDrawer);
	}

	React.useEffect(() => {
		async function fetchData() { 
			setIsLoading(true);
			const cartResponse = await axios.get('https://61f7e88b39431d0017eafaf6.mockapi.io/cart');
			const favoritesResponse = await axios.get('https://61f7e88b39431d0017eafaf6.mockapi.io/favorites');
			const itemsResponse = await axios.get('https://61f7e88b39431d0017eafaf6.mockapi.io/items');

			setIsLoading(false);

			setCartItems(cartResponse.data);
			setFavoritesItems(favoritesResponse.data);
			setItems(itemsResponse.data);
		}

		fetchData();
	}, []);


	const onAddToCart = (item) => {
		try {
			if (cartItems.find(obj => obj.id === item.id)) {
				axios.delete(`https://61f7e88b39431d0017eafaf6.mockapi.io/cart/${item.id}`);
				setCartItems(prev => prev.filter(obj => obj.id !== item.id));
			} else {
				axios.post('https://61f7e88b39431d0017eafaf6.mockapi.io/cart', item);
				setCartItems(prev => [...prev, item]);
			}
		} catch (error) {
			
		}
	}

	const onAddToFavorites = async (item) => {
		try {
			if (favoritesItems.find(obj => obj.id === item.id)) {
				axios.delete(`https://61f7e88b39431d0017eafaf6.mockapi.io/favorites/${item.id}`);
				setFavoritesItems(prev => prev.filter(obj => obj.id !== item.id));
			} else {
				const { data } = await axios.post('https://61f7e88b39431d0017eafaf6.mockapi.io/favorites', item);
				setFavoritesItems(prev => [...prev, data]);
			}
		} catch (error) {
			alert('Не удалось добавить в фавориты')
		}
		
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

	const isItemAdded = (id) => {
		return cartItems.some(obj => obj.id === id)
	}

// TODO 18.03 https://www.youtube.com/watch?v=C_3ZT7j1_jc&list=PL0FGkDGJQjJEos_0yVkbKjsQ9zGVy3dG7&index=7
	// * https://github.com/Archakov06/react-sneakers

	return (
		<AppContext.Provider value={{
			items, cartItems, favoritesItems,
			isItemAdded, onAddToFavorites, toggleDrawer,
			setCartItems
		}}>
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
									cartItems={cartItems}
									onAddToFavorites={onAddToFavorites}
									onAddToCart={onAddToCart}
									isLoading={isLoading}
								/>
							}
						/>
						<Route path="/favorites"
							element={
								<Favorites
									// items={favoritesItems}
									// onAddToFavorites={onAddToFavorites}
									onAddToCart={onAddToCart}
								/>
							}
						/>
					</Routes>

				</main>
			</div>
		</AppContext.Provider>
	);
}

export default App;
