
import { NavItem } from '../header/NavItem/NavItem';
import './FooterComponent.css';


export const FooterComponent = () => {
    const models = ['motorola razr', 'motorola edge', 'moto g', 'moto e', 'accesorios'];

    return (
        <>
            <footer>
                <div className="productContainer">
                    {models.map((model, index) => (
                        <NavItem key={index} model={model} />
                    ))}
                </div>
            </footer>
        </>
    )
};