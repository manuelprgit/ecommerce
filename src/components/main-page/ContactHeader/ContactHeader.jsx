import facebookLogo from '../../../img/facebook-logo.jpg';
import instagramLogo from '../../../img/instagram-logo.jpg';
import whatsAppLogo from '../../../img/whatsapp-logo.jpg';

import './ContactHeader.scss';


function ContactHeader() {
    return (
        <>
            <div className="contact-header-content">
                <div className="left-content">
                    <a href="">Ciudad Juan Bosch, Santo Domingo Este</a>
                    <a href="">829-898-2697</a>
                </div>
                <div className="right-content">
                    <a href="">Contáctenos</a>
                    <div className="social-media-content">
                        <a href="https://www.facebook.com">
                            <figure>
                                <img src={facebookLogo} alt="Logo de Facebook" />
                            </figure>
                        </a>
                        <a href="https://www.instagram.com">
                            <figure>
                                <img src={instagramLogo} alt="Logo de Instagram" />
                            </figure>
                        </a>
                        <a href="https://www.whatsapp.com">
                            <figure>
                                <img src={whatsAppLogo} alt="Logo de WhatsApp" />
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export { ContactHeader }