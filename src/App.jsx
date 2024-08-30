import { HomeComponent } from './components/HomeView/HomeComponent';
import { HeaderComponent } from './components/header/HeaderComponent';
import { FooterComponent } from './components/footer/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductsComponent} from './components/ProductsComponent/ProductsComponent';
import { ProductDescription} from './components/ProductsView/ProductDescription/ProductDescription';


function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route exact path='/' element={<HomeComponent />} />
          <Route exact path='/products/:model' element={<ProductsComponent />} />
          <Route exact path='/product/:prodId' element={<ProductDescription />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
