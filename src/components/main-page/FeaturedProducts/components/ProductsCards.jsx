import { formatter } from "../../../../helpers/utilities"

function ProductsCards({ product }) {

    return (
        <>
            <div className="product-card">
                <div className="add-to-bag">
                    <figure> 
                    </figure>
                </div>
                <div className="product-img">
                    <figure>
                        <img src={product.img} alt={product.description} />
                    </figure>
                </div>
                <div className="product-description">
                    <p>{product.description}</p>
                    <p>${formatter(product.price)}</p>
                </div>
            </div>
        </>
    )
}

export { ProductsCards }