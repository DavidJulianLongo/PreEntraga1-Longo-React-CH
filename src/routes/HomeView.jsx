import { ItemListContainer } from '../components/products/ItemListContainer';
import { BannerComponent } from '../components/bannerHome/BannerComponent';


export const HomeView = () =>{
    return(
        <>  
            <BannerComponent />
            <ItemListContainer />
        </>
    )
};