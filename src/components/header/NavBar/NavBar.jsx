import './NavBar.css';
import { CartWidget } from "../CartWidget/CartWidget";
import { LogoComponent } from '../LogoComponent/LogoComponent';
import { Link } from 'react-router-dom';
import { NavItem } from '../NavItem/NavItem';


export const NavBar = () => {
    const models = ['motorola razr', 'motorola edge', 'moto g', 'moto e', 'accesorios'];

    return (
        <>
            <nav className="nav">
                <div className='logo-container'>
                    <Link to={'/'}>
                        <LogoComponent imgSrc='/src/assets/img/header/mlogo-black.png' text='M-park' />
                    </Link>
                </div>
                <div className="navbar">
                    <ul className="products-list">
                        {models.map((model, index) => (
                            <Link to={`/products/${model}`} key={index}>
                                <NavItem text={model} />
                            </Link>
                        ))}
                    </ul>
                    <CartWidget />
                </div>
            </nav>
        </>
    )
};



{/* <NavItem model="motorola razr" path="/products/motorola-razr" />
                        <NavItem model="motorola edge" path="/products/motorola-edge" />
                        <NavItem model="moto g" path="/products/moto-g" />
                        <NavItem model="moto e" path="/products/moto-e" />
                        <NavItem model="accesorios" path="/products/accesorios" /> */}



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