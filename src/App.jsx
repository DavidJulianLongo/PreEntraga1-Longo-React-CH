

import { HeaderComponent } from './components/header/HeaderComponent';
import { ItemListContainer } from './components/header/ItemListContainer/ItemListContainer';
import { ProductCard } from './components/cards/ProductCard';


function App() {

  return (
    <>
    <HeaderComponent />
    <ItemListContainer  greeting="Bienvenidos a M-Park"/>
    
    </>
  )
}

export default App
