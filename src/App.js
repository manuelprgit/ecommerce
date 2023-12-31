import { useState } from 'react';

import { ContactHeader } from "./components/main-page/ContactHeader/ContactHeader";
import { Header } from "./components/main-page/Header/Header";
import { Hero } from "./components/main-page/Hero/Hero";
import { FeaturedProducts } from "./components/main-page/FeaturedProducts/FeaturedProducts";
import './index.scss';


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
        description: 'iPhone 15 Pro',
        price: 57942,
        img: './img/productsImg/iphone15.jpeg'
    },
    {
        id: 2,
        description: 'Redmi Note 12 pro',
        price: 17400,
        img: './img/productsImg/redmi12pro.jpeg'
    },
    {
        id: 3,
        description: 'Samsung Galaxy S21',
        price: 10800,
        img: './img/productsImg/samsung21.jpg'
    },
    {
        id: 4,
        description: 'Redmi 13C',
        price: 7800,
        img: './img/productsImg/redmi13c.jpeg'
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


function App() {

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
            <ContactHeader />
            <Header 
                stateOptions={stateOptions}
                productCart={productCart}
                activeOption={activeOption}
            />
            <Hero />
            <FeaturedProducts 
                products={products}
            />
        </>
    )
}

export default App