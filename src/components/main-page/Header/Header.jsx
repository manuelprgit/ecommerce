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
        isActivate: false
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

function Header() {

    const [stateOptions, setStateOptions] = useState(options);

    const activeOption = (id) => {
        let options = [...stateOptions]
        options.forEach(option=>option.isActivate = false);
        let index = options.findIndex(option=>option.id === id);
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
                    userInfo={'Manuel1662'}
                />
            </div>
            <hr />
        </>
    )
}

export { Header }