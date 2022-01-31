import React, { useState} from 'react';
import { Card, Header, MainGrid, Drawer } from './components';

function App() {
  
  const [items, setItems] = useState([]);
  const [isActiveDrawer, setIsActiveDrawer] = useState(false);

  function toggleDrawer() {
    setIsActiveDrawer(!isActiveDrawer);
  }

  return (
    <>
      <Drawer active={isActiveDrawer} closeDrawer={toggleDrawer} />
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
                  onClickFavorite={() => { console.log(`Добавили в избранное`) }}
                  onClickAdd={() => { console.log('item: ', item) }}
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
