import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import ItemListContainer from './components/ItemDetailContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CustomContext } from './components/CustomContext';





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
