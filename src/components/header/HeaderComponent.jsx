import './HeaderComponent.css';

import { BannerContentComponent } from './BannerContentComponent/BannerContentComponent';
import { NavBar } from "./NavBar/NavBar";

export const HeaderComponent = () => {
  return (
    <>
      <header>
        <NavBar />
        <BannerContentComponent imgSrc1='src/assets/img/header/mlogowhite.png' imgSrc2='src/assets/img/header/edge50ultra.png' text='Intelligence meets art.'/>
      </header>
    </>

  )
}