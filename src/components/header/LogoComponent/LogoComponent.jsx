import './LogoComponent.css'

export const LogoComponent = ({imgSrc, text}) => {
    return (
        <>
            <a className='mpark' href="#"><img src={imgSrc} alt="Logo M-Park" className='logo' />{text}</a>
        </>
    );
}