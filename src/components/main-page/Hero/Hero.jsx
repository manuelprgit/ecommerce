import './Hero.scss';

import iPhone15 from '../../../img/iphone15promax.png'

function Hero (){
    return(
        <>
            <div className="hero-content">
                <div className="hero-image-content"></div>
                <div className="article-info">
                    <div className="article-description-content">
                        <h2>iPhone 15 Pro</h2>
                        <h3>Titanio</h3>
                        <p>A tan solo un <a href="" className='cta'>Click</a> de distancia</p>
                    </div>
                    <div className="product-image">
                        <figure>
                            <img src={iPhone15} alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}

    export { Hero }