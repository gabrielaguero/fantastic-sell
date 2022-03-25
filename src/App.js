import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './componentes/NavBar';
import React from 'react';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Cart from './componentes/Cart';
import { CustomContext } from './componentes/CustomContext/CustomContext';





function App() {
  return (
    <CustomContext>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/"element={<ItemListContainer saludo="Bienvenidos a Fantastic Sell!" />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart />} />  
        </Routes>
      </BrowserRouter>
    </CustomContext>
  );
}

export default App;
