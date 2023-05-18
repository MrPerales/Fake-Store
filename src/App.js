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

function App() {

  // get details
  const [productDetails,setProductDetails]=React.useState({})
 
  return (
    <>
      <HashRouter>
        <Menu/>

        <Routes>
          <Route path='/' element={<HomePage
            productDetails={productDetails}
            setProductDetails={setProductDetails}
          />}></Route>

          <Route path='/clothes' element={<ClothesPage
            productDetails={productDetails}
            setProductDetails={setProductDetails}
          />}></Route>

          <Route path='/electronics' element={<ElectronicsPage
            productDetails={productDetails}
            setProductDetails={setProductDetails}
          />}></Route>

          <Route path='/furniture' element={<FurniturePage
            productDetails={productDetails}
            setProductDetails={setProductDetails}
          />}></Route>

          <Route path='/toys' element={<ToysPage
           productDetails={productDetails}
            setProductDetails={setProductDetails}
          />}></Route>

          <Route path='/others' element={<OthersPage
            productDetails={productDetails}
            setProductDetails={setProductDetails}
          />}></Route>
          
          <Route path='*' element={<NotFoundPage/>}></Route>

        </Routes>





      </HashRouter>
    </>
  );
}

export default App;
