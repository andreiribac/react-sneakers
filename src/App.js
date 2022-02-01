import React, { useState} from 'react';
import { Card, Header, MainGrid, Drawer } from './components';

function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isActiveDrawer, setIsActiveDrawer] = useState(false);

  const toggleDrawer = () => {
    setIsActiveDrawer(!isActiveDrawer);
  }

  React.useEffect(() => {
    fetch('https://61f7e88b39431d0017eafaf6.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  }

  return (
    <>
      <Drawer
        active={isActiveDrawer}
        closeDrawer={toggleDrawer}
        items={cartItems}
      />
      <div className="wrapper">
        <Header openDrawer={toggleDrawer} />
        <main>
          <MainGrid title="все кросовки" search>
            {items.map((item) => {
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
