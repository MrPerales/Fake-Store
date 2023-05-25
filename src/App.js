import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './Components/Menu/Menu';
import {HomePage} from './Pages/HomePage'
import { ClothesPage } from './Pages/ClothesPAge';
import {ElectronicsPage} from './Pages/ElectronicsPage'
import {FurniturePage} from './Pages/FurniturePage'
import {ToysPage} from './Pages/ToysPage'
import {OthersPage} from './Pages/OthersPage'
import {NotFoundPage} from './Pages/NotFoundPage'
import { AccountPage } from './Pages/AccountPage';
import { MyOrderPage } from './Pages/MyOrderPage';
import { LoginPage } from './Pages/LoginPage';
import { CartProvider } from './Context/CartContext';

function App() {


  return (
    <CartProvider>
      <HashRouter>
        
        <Menu/>

        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/clothes' element={<ClothesPage/>}></Route>
          <Route path='/electronics' element={<ElectronicsPage/>}></Route>
          <Route path='/furniture' element={<FurniturePage/>}></Route>
          <Route path='/toys' element={<ToysPage/>}></Route>
          <Route path='/others' element={<OthersPage/>}></Route>
          
          {/* Routes to Account */}
            <Route path='/my-account' element={<AccountPage/>}/>
            <Route path='/my-orders' element={<MyOrderPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>


          {/* Route to notFoundPage */}
          <Route path='*' element={<NotFoundPage/>}></Route>

        </Routes>

      
      


      </HashRouter>
    </CartProvider>
  );
}

export default App;
