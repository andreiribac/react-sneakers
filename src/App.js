import React, { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";


import { Header, Drawer } from './components';
import { Home, Favorites, Orders } from './pages';

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
			try {
				setIsLoading(true);
				const cartResponse = await axios.get('https://61f7e88b39431d0017eafaf6.mockapi.io/cart');
				const favoritesResponse = await axios.get('https://61f7e88b39431d0017eafaf6.mockapi.io/favorites');
				const itemsResponse = await axios.get('https://61f7e88b39431d0017eafaf6.mockapi.io/items');

				// const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
				// 	await axios.get('https://61f7e88b39431d0017eafaf6.mockapi.io/cart'),
				// 	await axios.get('https://61f7e88b39431d0017eafaf6.mockapi.io/favorites'),
				// 	await axios.get('https://61f7e88b39431d0017eafaf6.mockapi.io/items'),
				// ]);

				setIsLoading(false);

				setCartItems(cartResponse.data);
				setFavoritesItems(favoritesResponse.data);
				setItems(itemsResponse.data);
			} catch (error) {
				alert('Ошибка при запросе данных')
			}
		}

		fetchData();
	}, []);


	const onAddToCart = async (item) => {
		try {
			const findItem = cartItems.find(obj => obj.parentId === item.id);
			if (findItem) {
				setCartItems(prev => prev.filter(obj => obj.parentId !== item.id));
				await axios.delete(`https://61f7e88b39431d0017eafaf6.mockapi.io/cart/${findItem.id}`);
			} else {
				setCartItems(prev => [...prev, item]);
				const { data} = await axios.post('https://61f7e88b39431d0017eafaf6.mockapi.io/cart', item);
				setCartItems(prev => prev.map(obj => {
					if (obj.parentId === data.parentId) {
						return {
							...obj,
							id: data.id,
						}
					}
					return item;
				}));
			}
		} catch (error) {
			alert("Не получилось добавить в корзину")
		}
	}

	const onAddToFavorites = async (item) => {
		try {
			if (favoritesItems.find(obj => obj.id === item.id)) {
				setFavoritesItems(prev => prev.filter(obj => obj.id !== item.id));
				await axios.delete(`https://61f7e88b39431d0017eafaf6.mockapi.io/favorites/${item.id}`);
			} else {
				const { data } = await axios.post('https://61f7e88b39431d0017eafaf6.mockapi.io/favorites', item);
				setFavoritesItems(prev => [...prev, data]);
			}
		} catch (error) {
			alert('Не удалось добавить в фавориты')
		}
		
	}

	const onRemoveItem = async (id) => {
		try {
			await axios.delete(`https://61f7e88b39431d0017eafaf6.mockapi.io/cart/${id}`);
			setCartItems(prev => prev.filter(item => item.id !== id));
		} catch (error) {
			alert('Не удалось удалить из корзины')
		}
		
	}

	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value);
	}

	const onClearSearch = () => {
		setSearchValue('');
	}

	const isItemAdded = (id) => {
		return cartItems.some(obj => obj.parentId === id)
	}


	return (
		<AppContext.Provider value={{
			items, cartItems, favoritesItems,
			isItemAdded, onAddToFavorites, toggleDrawer,
			setCartItems, onAddToCart
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
						<Route path="/orders"
							element={
								<Orders
									
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
