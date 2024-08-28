import './LogoComponent.css'

export const LogoComponent = ({ imgSrc, text }) => {
    return (
        <>
            <div className="mpark">
                <img src={imgSrc} alt="Logo M-Park" className="logo" />
                <p>{text}</p>
            </div>

        </>
    );
}


