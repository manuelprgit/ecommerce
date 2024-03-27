import './footer.scss'
import whatsAppLogo from '../../../img/icons/whatsapp-logo-48.png'
import instagramLogo from '../../../img/icons/instagram-logo-48.png'

function Footer (){
    return(
        <>
            <footer>
                <div className="footer-content">
                    <div className="info-company-content">
                        <div className="company-info-content">
                            <h3 className='head-text'>GadgetDevices</h3>
                            <p className='company-description'>En GadgetDevices, estamos comprometidos con llevarte la última y más innovadora tecnología directamente a tus manos. Somos más que una tienda en línea; somos apasionados por conectar a las personas con los gadgets y dispositivos más avanzados del mercado.</p>
                        </div>
                        <div className="direct-links">
                            <h3 className="head-text">Links</h3>
                            <ul>
                                <li><a href="/">Inicio</a></li>
                                <li><a href="/">Categoria</a></li>
                                <li><a href="/">Ofertas</a></li>
                                <li><a href="/">Compras</a></li>
                            </ul>
                        </div>
                        <div className="subscribe-content">
                            <h3 className="head-text">Suscríbete para más</h3>
                            <form className='subscribe-form'>
                                <input type="text" placeholder='Nombre'/>
                                <input type="text" placeholder='Correo electrónico'/>
                                <button>Suscribirme</button>
                            </form>
                        </div>
                    </div>
                    <div className="social-media-content">

                        <a href='https://wa.me/8498625730' target='_blanc' className="social-content">
                            <div className="icon">
                                <figure>
                                    <img src={whatsAppLogo} alt="WhatsApp: 849-862-5730" />
                                </figure>
                            </div>
                            <div className="text">849-862-5730</div>
                        </a>

                        <a href='https://www.instagram.com/gadgetdevices/' target='_blanc' className="social-content">
                            <div className="icon">
                                <figure>
                                    <img src={instagramLogo} alt="WhatsApp: 849-862-5730" />
                                </figure>
                            </div>
                            <div className="text">@GadgetDevices</div>
                        </a>

                    </div>
                </div>
            </footer>
        </>
    )
}

    export { Footer }