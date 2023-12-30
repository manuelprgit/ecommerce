import '../header.scss';
import bagIcon from '../../../../img/calendar.svg';

function UserMarket({ userInfo,productsOnCart }) {
    return (
        <>
            <div className="user-market">
                <a href=''>
                    {(userInfo.length > 0) ? userInfo : 'Iniciar Sesión'}
                </a>
                <div className="cart-info">
                    <div className="cart-amount">
                        <p>
                            Cart / 
                            $
                            <span>
                                {productsOnCart.reduce((acc,item)=>acc+item.price,0)}
                            </span>
                        </p>
                    </div>
                    <div className="items-cart-quantity">
                        <figure>
                            <img src={bagIcon} alt="" />
                        </figure>
                        <div className="total-items">
                            <p>{productsOnCart.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { UserMarket }