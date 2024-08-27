import './NavBar.css';
import { CartWidget } from "../CartWidget/CartWidget";
import { NavItem } from "../NavItem/NavItem";
import { LogoComponent } from '../LogoComponent/LogoComponent';


export const NavBar = () => {
    // const models = ['motorola razr', 'motorola edge', 'moto g', 'moto e', 'accesorios'];

    return (
        <>
            <nav className="nav">
                <div className='logo-container'>
                    <LogoComponent imgSrc='/src/assets/img/header/mlogo-black.png' text='M-park' />
                </div>
                <div className="navbar">
                    <ul className="productContainer">
                        <NavItem model="motorola razr" exact path="/products/motorola-razr" />
                        <NavItem model="motorola edge" path="/products/motorola-edge" />
                        <NavItem model="moto g" path="/products/moto-g" />
                        <NavItem model="moto e" path="/products/moto-e" />
                        <NavItem model="accesorios" path="/products/accesorios" />
                    </ul>
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}


// <>
//     <nav className="nav">
//         <div className='logo-container'>
//             <LogoComponent imgSrc='src/assets/img/header/mlogo-black.png' text='M-park' />
//         </div>
//         <div className="navbar">
//             <div className="productContainer">
//                 {models.map((model, index) => (
//                     <NavItems key={index} model={model} />
//                 ))}
//             </div>
//             <CartWidget />
//         </div>
//     </nav>
// </>