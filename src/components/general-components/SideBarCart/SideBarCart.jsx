import { ProductsCardsForCart } from './components/ProductsCardsForCart';

import './side-bar-cart.scss';

import shoppingCart from '../../../img/icons/shopping_cart.svg';
import closeBtn from '../../../img/icons/cancel.svg';

const closeSidebarCart = () => {
    document
        .querySelector('.sidebar-cart-container')
        .classList
        .remove('show')
}

function SideBarCart({ productCart,removeProductsOnCart }) {
    return (
        <>
            <div 
                className="sidebar-cart-container"
                onClick={(e) => {
                    if(e.target.classList.contains('show'))
                        e.target.classList.remove('show')
                    
                }}    
            >
                <div className="sidebar-cart-content">
                    <div className="sidebar-cart-header">
                        <div className="total-articles">
                            <p>Artículos: <span>{productCart.length}</span></p>
                        </div>
                        <div className="cart-title">
                            <figure>
                                <img src={shoppingCart} alt="" />
                            </figure>
                            <p>Carrito</p>
                        </div>
                        <div className="close-button-content">
                            <figure
                                onClick={() => {
                                    closeSidebarCart();
                                }}
                            >
                                <img src={closeBtn} alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className='product-cards-container'>
                        {
                            productCart.map(product =>
                                <ProductsCardsForCart
                                    key={product.id}
                                    product={product}
                                    removeProductsOnCart={removeProductsOnCart}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export { SideBarCart }