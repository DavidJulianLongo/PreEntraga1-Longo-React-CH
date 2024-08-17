import './BannerContentComponent.css';

export const BannerContentComponent = ({imgSrc1, imgSrc2, text}) => {
    return (
        <>
            <section className='banner-container'>
                <div className='banner-content'>
                    <div>
                        <img className='logo-motorola' src={imgSrc1} alt="Logo motorola" />
                        <img className='logo-edge50ultra' src={imgSrc2} alt="Logo Edge 50 ultra"/>
                    </div>
                    <h1><strong>Hello</strong><br></br>Sm<strong>art</strong>phone</h1>
                    <p>{text}</p>
                </div>
            </section>
        </>
    )
}