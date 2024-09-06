import { HeaderComponent } from './components/header/HeaderComponent';
import { FooterComponent } from './components/footer/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer} from './components/ProductsComponent/ItemListContainer';
import { ItemDetailContainer} from './components/ProductsComponent/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>} />
          <Route exact path='/category/:id' element={<ItemListContainer />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
