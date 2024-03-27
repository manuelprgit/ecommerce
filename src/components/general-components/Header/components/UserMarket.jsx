import { formatter } from '../../../../helpers/utilities';
import '../header.scss';
import bagIcon from '../../../../img/icons/shopping_bag.svg';

function UserMarket({ userInfo, productsOnCart }) {
    console.log(productsOnCart)
    return (
        <>
            <div className="user-market">
                <a href=''>
                    {(userInfo.length > 0) ? userInfo : 'Iniciar Sesión'}
                </a>
                <div
                    className="cart-info"
                    onClick={() => {
                        document
                            .querySelector('.sidebar-cart-container')
                            .classList
                            .add('show');
                    }}
                >
                    <div className="cart-amount">
                        <p>
                            Cart /
                            $
                            <span>
                                {formatter(productsOnCart.reduce((acc, item) => acc + (item.price * item.quantity), 0))}
                            </span>
                        </p>
                    </div>
                    <div className="items-cart-quantity">
                        <figure>
                            <img src={bagIcon} alt="shopping bag" />
                        </figure>
                        <div className="total-items">
                            <p>{productsOnCart.reduce((total, product)=>total + product.quantity,0)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { UserMarket }