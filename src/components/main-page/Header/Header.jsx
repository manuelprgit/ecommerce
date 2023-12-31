import { LogoContent } from './components/LogoContent';
import { OptionsContent } from './components/OptionsContent';
import { UserMarket } from './components/UserMarket';

import './header.scss';
 

function Header({ stateOptions, activeOption, productCart }) {

    return (
        <>
            <div className="header-container">
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
            </div>
        </>
    )
}

export { Header }