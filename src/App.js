import { useState } from 'react';

import { ContactHeader } from "./components/main-page/ContactHeader/ContactHeader";
import { SideBarCart } from './components/general-components/SideBarCart/SideBarCart';
import { Header } from './components/general-components/Header/Header'
import { Hero } from "./components/main-page/Hero/Hero";
import { FeaturedProducts } from "./components/main-page/FeaturedProducts/FeaturedProducts";
import { Brands } from './components/main-page/Brands/Brands';
import { Footer } from './components/general-components/Footer/Footer';
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

const featuredProducts = [
    {
        id: 1,
        description: 'iPhone 15 Pro',
        price: 57942,
        img: './img/productsImg/iphone15.jpeg',
        quantity: 1
    },
    {
        id: 2,
        description: 'Redmi Note 12 pro',
        price: 17400,
        img: './img/productsImg/redmi12pro.jpeg',
        quantity: 1
    },
    {
        id: 3,
        description: 'Samsung Galaxy S21',
        price: 10800,
        img: './img/productsImg/samsung21.jpg',
        quantity: 1
    },
    {
        id: 4,
        description: 'Redmi 13C',
        price: 7800,
        img: './img/productsImg/redmi13c.jpeg',
        quantity: 1
    }
]

const brands = [
    {
        id: 1,
        description: 'Apple',
        img: './img/brandsImg/apple.png',
    },
    {
        id: 2,
        description: 'Xiaomi',
        img: './img/brandsImg/xiaomi.png'
    },
    {
        id: 3,
        description: 'Samsung',
        img: './img/brandsImg/samsung.png'
    },
    {
        id: 4,
        description: 'Nokia',
        img: './img/brandsImg/nokia.png'
    }
]

function App() {

    const [stateOptions, setStateOptions] = useState(options);

    const [productCart, setProductCart] = useState([]);

    const activeOption = (id) => {
        let options = [...stateOptions]
        options.forEach(option => option.isActivate = false);
        let index = options.findIndex(option => option.id === id);
        options[index].isActivate = true;
        setStateOptions(options);
    }

    const addProductsOnCart = (id) => {
        let getProduct = featuredProducts.find(product => product.id === id);
        let newList = [...productCart];
        let hasRepeatArticle = productCart.includes(getProduct);
        if (hasRepeatArticle) {
            let key = newList.findIndex(product => product.id === id);
            newList[key].quantity++;
            console.log(newList);
            setProductCart(newList);
            return;
        }
        console.log(newList);
        setProductCart([...newList, getProduct]);
    }

    const removeProductsOnCart = (id) => {
        let newList = [...productCart];
        let index = newList.findIndex(product => product.id === id);
        newList.splice(index, 1);
        console.log(newList);
        setProductCart(newList);
    }

    return (
        <>
            <div className='general-content'>
                <Header
                    stateOptions={stateOptions}
                    productCart={productCart}
                    activeOption={activeOption}
                />
                <SideBarCart
                    productCart={productCart}
                    removeProductsOnCart={removeProductsOnCart}
                />
                <Hero />
                <FeaturedProducts
                    products={featuredProducts}
                    addProductsOnCart={addProductsOnCart}
                />
                <Brands
                    brands={brands}
                />

            </div>
            <Footer />
        </>
    )
}

export default App