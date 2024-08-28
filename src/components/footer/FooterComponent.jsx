
import { NavItem } from '../header/NavItem/NavItem';
import { Link } from 'react-router-dom';
import './FooterComponent.css';


export const FooterComponent = () => {
    const models = ['motorola razr', 'motorola edge', 'moto g', 'moto e', 'accesorios'];

    return (
        <>
            <footer>
                <div className='footer-products'>
                    <h4>Modelos</h4>
                    <ul className="footer-products-list">
                        {models.map((model, index) => (
                            <Link to={`/products/${model}`} key={index}>
                                <NavItem text={model} />
                            </Link>
                        ))}
                    </ul>
                </div>
            </footer>
        </>
    )
};