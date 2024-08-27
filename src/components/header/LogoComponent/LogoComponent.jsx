import { Link } from 'react-router-dom';
import './LogoComponent.css'

export const LogoComponent = ({imgSrc, text}) => {
    return (
        <>
              <Link to={'/'} className="mpark">
                <img src={imgSrc} alt="Logo M-Park" className="logo" />
                {text}
            </Link>
            
        </>
    );
}


{/* <a className='mpark'>
                <Link to={'/'}></Link>
                <img src={imgSrc} alt="Logo M-Park" className='logo' />{text}</a> */}