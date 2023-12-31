import { formatter } from "../../../../helpers/utilities"

import add from '../../../../img/icons/add.svg' 

function ProductsCards({ product, addProductsOnCart }) {

    return (
        <>
            <div className="product-card">
                <div 
                    onClick={() => {
                        addProductsOnCart(product.id);
                    }}
                    className="add-to-bag"
                >
                    <figure> 
                        <img src={add} alt="Add Button" className="add-btn"/>
                    </figure>
                </div>
                <div className="product-img">
                    <figure>
                        <img src={product.img} alt={product.description} />
                    </figure>
                </div>
                <div className="product-description">
                    <p className="pro-description">{product.description}</p>
                    <p className="pro-price">${formatter(product.price)}</p>
                </div>
            </div>
        </>
    )
}

export { ProductsCards }