import gdLogo from '../../../../img/gd-logo.png'
import '../header.scss';

function LogoContent({logoDescription}) {
    return (
        <>
            <div className="logo-content">
                <figure>
                    <img src={gdLogo} alt={logoDescription} />
                </figure>
            </div>
        </>
    )
}

export { LogoContent }