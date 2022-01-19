import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppStyled } from "./AppStyle";

import NavBar from "./components/NavBar/index";
import {Wrapper} from "./components/common/container/Wrapper"
// ------------Añadir componentes: --------------//
import Home from "./components/pages/Home/index";
//import Shop from './components/Shop/index';                             //-Home Shop
//import ProductDetail from './components/ProductDetail/index';           //-Detalle del producto
//import ProductCreateForm from './components/ProductCreateForm/index';   //-Form creación de producto

function App() {
  return (
    <AppStyled className="App">
      <NavBar />
      <Wrapper>
        <Routes>
          <Route path="/shop" />
          <Route path="/favorites" />
          <Route path="/home" element={<Home />} />
          <Route path={`/details/:idProduct`} />
          <Route path="/dashboard/*">
            <Route path="addproducts" />
          </Route>
        </Routes>
      </Wrapper>

    </AppStyled>
  );
}

export default App;
