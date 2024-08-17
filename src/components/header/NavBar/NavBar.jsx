import './NavBar.css'

import { CartWidget } from "../CartWidget/CartWidget"
import { NavItems } from "../NavItems/NavItems"
import { LogoComponent } from '../LogoComponent/LogoComponent'


export const NavBar = () => {
    const models = ['motorola razr', 'motorola edge', 'moto g', 'moto e', 'accesorios'];
  
    return (
        <>
            <nav className="nav">
                <div className='logoContainer'>
                    <LogoComponent imgSrc='../../src/assets/img/header/mlogo.png' text='M-park' />
                </div>
                <div className="navbar">
                    <div className="productContainer">
                        {models.map((model, index) => (
                            <NavItems key={index} model={model} />
                        ))}
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}