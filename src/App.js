import React from 'react';
import { Card, Header, MainGrid } from './components';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <MainGrid title="все кросовки">
          <Card img={''} title={'Мужские Кроссовки Nike Blazer Mid Suede'} price={'12 999'} />
        </MainGrid>
      </main>
    </div>
  );
}

export default App;
