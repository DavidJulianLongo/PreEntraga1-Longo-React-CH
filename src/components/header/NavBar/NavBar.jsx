import './NavBar.css'

import { CartWidget } from "../CartWidget/CartWidget"
import { NavItems } from "../NavItems/NavItems"
import { LogoComponet } from '../LogoComponent/LogoComponent'


export const NavBar = () =>{
    return(
        <>
            <nav className="navbar ">
                <div className='logoContainer'>
                    <LogoComponet />
                </div>
                <div className="productContainer">
                    <NavItems model="motorola razr"/>
                    <NavItems model="motorola edge"/>
                    <NavItems model="moto g"/>
                    <NavItems model="moto e"/>
                </div>
                <CartWidget />
            </nav>
            
        </>
    )
}