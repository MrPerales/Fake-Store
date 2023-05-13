import { HashRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './Components/Menu/Menu';
import {HomePage} from './Pages/HomePage'
import { ClothesPage } from './Pages/ClothesPage';
import {ElectronicsPage} from './Pages/ElectronicsPage'
import {FurniturePage} from './Pages/FurniturePage'
import {ToysPage} from './Pages/ToysPage'
import {OthersPage} from './Pages/OthersPage'
import {NotFoundPage} from './Pages/NotFoundPage'





function App() {
  return (
    <>
      <HashRouter>
        <Menu/>

        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/clothes' element={<ClothesPage/>}></Route>
          <Route path='/electronics' element={<ElectronicsPage/>}></Route>
          <Route path='/furniture' element={<FurniturePage/>}></Route>
          <Route path='/toys' element={<ToysPage/>}></Route>
          <Route path='/others' element={<OthersPage/>}></Route>
          <Route path='*' element={<NotFoundPage/>}></Route>

        </Routes>





      </HashRouter>
    </>
  );
}

export default App;
