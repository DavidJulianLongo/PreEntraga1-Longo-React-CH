
import { NavItem } from '../header/NavItem/NavItem';
import { Link } from 'react-router-dom';
import './FooterComponent.css';

export const FooterComponent = () => {
    const models = ['motorola razr', 'motorola edge', 'moto g', 'moto e'];

    const socialLinks = [
        {
            href: 'https://www.instagram.com',
            src: '/src/assets/img/footer/instagram.png',
            alt: 'Instagram'
        },
        {
            href: 'https://www.facebook.com',
            src: '/src/assets/img/footer/facebook.png',
            alt: 'Facebook'
        },
        {
            href: 'https://www.twitter.com',
            src: '/src/assets/img/footer/x.png',
            alt: 'Twitter'
        },
        {
            href: 'https://www.youtube.com',
            src: '/src/assets/img/footer/youtube.png',
            alt: 'YouTube'
        }
    ];

    return (
        <>
            <footer>
                <div className='footer-content'>
                    <div className='footer-products'>
                        <h5>Modelos</h5>
                        <ul className="footer-products-list">
                            {models.map((model, index) => (
                                <Link to={`/category/${model}`} key={index}>
                                    <NavItem text={model} />
                                </Link>
                            ))}
                        </ul>
                    </div>

                    <div className="social-media">
                        <h5>Seguinos</h5>
                        <div className="social-icons">
                            {socialLinks.map(({ href, src, alt }) => (
                                <a key={alt} href={href} target="_blank">
                                    <img src={src} alt={alt} />
                                </a>))}
                        </div>
                    </div>

                    <div className='payment-methods'>
                        <h5>Métodos de pago</h5>
                        <img src='/src/assets/img/footer/metodospago.jpg' alt="" />
                    </div>
                </div>
            </footer>
        </>
    )
};