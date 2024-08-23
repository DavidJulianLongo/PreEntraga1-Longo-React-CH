
import { NavItems } from '../header/NavItems/NavItems';
import './FooterComponent.css';


export const FooterComponent = () => {
    const models = ['motorola razr', 'motorola edge', 'moto g', 'moto e', 'accesorios'];

    return (
        <>
            <footer>
                <div className="productContainer">
                    {models.map((model, index) => (
                        <NavItems key={index} model={model} />
                    ))}
                </div>
            </footer>
        </>
    )
};