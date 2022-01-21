import React from 'react';
import { Card, Header, MainGrid, Drawer } from './components';

const arr = [
	{ name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, img: '/img/sneakers/1.jpg' },
	{ name: 'Мужские Кроссовки Nike Air Max 270', price: 12999, img: '/img/sneakers/2.jpg' },
	{ name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, img: '/img/sneakers/3.jpg' },
	{ name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8499, img: '/img/sneakers/4.jpg' },
	{ name: 'Мужские Кроссовки Under Armour Curry 8', price: 15199, img: '/img/sneakers/5.jpg' },
	{ name: 'Мужские Кроссовки Nike Kyrie 7', price: 11299, img: '/img/sneakers/6.jpg' },
	{ name: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799, img: '/img/sneakers/7.jpg' },
	{ name: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499, img: '/img/sneakers/8.jpg' },
	{ name: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 13999, img: '/img/sneakers/9.jpg' },
	{ name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, img: '/img/sneakers/10.jpg' },
]

function App() {

	const onClickBtn = (item) => {
		console.log('item: ', item);
	}

  return (
    <>
      <Drawer />
      <div className="wrapper">
        <Header />
        <main>
          <MainGrid title="все кросовки" search>
            {arr.map((item) => {
              return (
								<Card key={item.img} img={item.img} name={item.name} price={item.price} onClick={() => { console.log('item: ', item)}} />
              );
            })}
          </MainGrid>
        </main>
      </div>
    </>
  );
}

export default App;
