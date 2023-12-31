import { ProductsCards } from "./components/ProductsCards"
import './featured-products.scss'

function FeaturedProducts({ products }) {
    return (
        <>
            <div className="feature-products-content">
                <div className="feature-title-section">
                    <h3>Productos Destacados</h3>
                </div>
                <div className="products-content">
                    {products.map(product => {
                        return (
                            <ProductsCards
                                key={product.id}
                                product={product}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export { FeaturedProducts }