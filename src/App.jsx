import { HeaderComponent } from './components/header/HeaderComponent';
import { FooterComponent } from './components/footer/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/products/ItemListContainer';
import { ItemDetailContainer } from './components/products/itemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { HomeView } from './routes/HomeView';



function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <HeaderComponent />
          <Routes>
            <Route exact path='/' element={<HomeView />} />
            <Route exact path='/category/:model' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
