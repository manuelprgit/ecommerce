import trashCan from '../../../../img/icons/trash_can.svg';
import { formatter } from '../../../../helpers/utilities';

function ProductsCardsForCart({ product, removeProductsOnCart }) {
    return (
        <>
            <div className="product-cards">
                <div className="image-product-content">
                    <figure>
                        <img src={product.img} alt={product.description} />
                    </figure>
                </div>
                <div className="product-description-content">
                    <p>{product.description}</p>
                    <p className="smooth-black">${formatter(product.price)}</p>
                </div>
                <div
                    onClick={() => {
                        removeProductsOnCart(product.id)
                    }}
                    className="remove-item"
                >
                    <figure>
                        <img src={trashCan} alt="" />
                    </figure>
                </div>
                <div className="product-quantity-total">
                    <input type="number" defaultValue={product.quantity}/>
                </div>
            </div>
        </>
    )
}

export { ProductsCardsForCart }