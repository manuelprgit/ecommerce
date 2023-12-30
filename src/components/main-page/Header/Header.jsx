import { useState } from 'react';
import { LogoContent } from './components/LogoContent';
import { OptionsContent } from './components/OptionsContent';
import { UserMarket } from './components/UserMarket';

import './header.scss';

const options = [
    {
        id: 1,
        description: 'Inicio',
        href: '',
        isActivate: true
    },
    {
        id: 2,
        description: 'Categorías',
        href: '',
        isActivate: false
    },
    {
        id: 3,
        description: 'Ofertas',
        href: '',
        isActivate: false
    },
    {
        id: 4,
        description: 'Compras',
        href: '',
        isActivate: false
    }
]

const products = [
    {
        id: 1,
        description: 'Celular iPhone',
        price: 35000,
        img: ''
    },
    {
        id: 2,
        description: 'Celular Xiaomi',
        price: 15000,
        img: ''
    },
    {
        id: 3,
        description: 'Celular Samsung',
        price: 20000,
        img: ''
    }
];

const productsOnCart = [
    {
        id: 1,
        description: 'Celular iPhone',
        price: 35575.99,
        img: ''
    },
    {
        id: 3,
        description: 'Celular Samsung',
        price: 19850.89,
        img: ''
    }
];

function Header() {

    const [stateOptions, setStateOptions] = useState(options);

    const [productCart, setProductCart] = useState(productsOnCart);

    const activeOption = (id) => {
        let options = [...stateOptions]
        options.forEach(option => option.isActivate = false);
        let index = options.findIndex(option => option.id === id);
        options[index].isActivate = true;
        setStateOptions(options);
    }

    return (
        <>
            <div className="header-content">
                <LogoContent
                    logoDescription={'Logo GadgetDevices'}
                />
                <OptionsContent
                    options={stateOptions}
                    activeOption={activeOption}
                />
                <UserMarket
                    userInfo={''}
                    productsOnCart={productCart}
                />
            </div>
            <hr />
        </>
    )
}

export { Header }