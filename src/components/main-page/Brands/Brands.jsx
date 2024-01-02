import { BrandCards } from './components/BrandCards';
import './brands.scss';

function Brands({ brands }) {
    return (
        <>
            <div className="brands-content">
                <div className="brand-title">
                    <h3>Algunas de nuestras marcas</h3>
                </div>
                <div className="brands-card-content">
                    {brands.map(brand=>
                        <BrandCards
                            key={brand.id}
                            brand={brand}
                        />
                    )}
                    
                </div>
            </div>
        </>
    )
}

export { Brands }