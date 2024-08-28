
import { NavItem } from '../header/NavItem/NavItem';
import { Link } from 'react-router-dom';
import './FooterComponent.css';


export const FooterComponent = () => {
    const models = ['motorola razr', 'motorola edge', 'moto g', 'moto e', 'accesorios'];

    const socialLinks = [
        {
            href: 'https://www.instagram.com',
            src: '/path-to-icons/instagram-icon.png',
            alt: 'Instagram'
        },
        {
            href: 'https://www.facebook.com',
            src: '/path-to-icons/facebook-icon.png',
            alt: 'Facebook'
        },
        {
            href: 'https://www.twitter.com',
            src: '/path-to-icons/twitter-icon.png',
            alt: 'Twitter'
        },
        {
            href: 'https://www.youtube.com',
            src: '/path-to-icons/youtube-icon.png',
            alt: 'YouTube'
        }
    ];

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

                <div className="social-media">
                    <h4>Seguinos</h4>
                    <div className="social-icons">
                        {socialLinks.map(({ href, src, alt }) => (
                            <a key={alt} href={href} target="_blank">
                                <img src={src} alt={alt} />
                            </a>))}
                    </div>
                </div>
            </footer>
        </>
    )
};