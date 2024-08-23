import { HeaderComponent } from './components/header/HeaderComponent';
import { ItemListContainer } from './components//ItemListContainer/ItemListContainer';
import { FooterComponent } from './components/footer/FooterComponent';



function App() {

  return (
    <>
      <HeaderComponent />
      <ItemListContainer greeting="Bienvenidos a M-Park" />
      <FooterComponent />
    </>
  )
}

export default App
