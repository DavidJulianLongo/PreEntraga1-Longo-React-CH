import { ProductCard } from './cards/ProductCard'
import './ItemListContainer.css'

export const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <div>
                <h2 className='h2'>{greeting}</h2>
                <ProductCard  imgSrc={'/edge50fusion.png'} name='Motorola Edge 50 Fusion' price={799.999}/>
            </div>

        </>
    )
}