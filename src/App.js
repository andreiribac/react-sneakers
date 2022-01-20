import React from 'react';
import { Button, Card, Header, MainGrid, Drawer } from './components';
import { IconSvgSelector } from './assets/icons/IconsSvgSelector';


function App() {
  return (
    <>
      <Drawer />
      <div className="wrapper">
        <Header />
        <main>
          <MainGrid title="все кросовки" search>
            <Card img={''} title={'Мужские Кроссовки Nike Blazer Mid Suede'} price={'12 999'} />
          </MainGrid>
        </main>
      </div>
    </>
  );
}

export default App;
