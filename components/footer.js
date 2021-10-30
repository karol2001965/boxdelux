import React from 'react'
import '../styles/footer.scss'
import Logo from '../logo.png'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import ScrollToTop from 'react-router-scroll-top'

function footer() {
    return (
        <div className="container_all footer_container">
            <footer className="footer margins">
                <section className="footer_info">
                    <div className="social_logo">
                        <img src={Logo}></img>
                        <div className="social">
                            <FontAwesomeIcon icon={faFacebookSquare} className="icon_footer" />

                            <p>BoxDelux Catering</p>
                        </div>
                        <div className="social insta">
                            <FontAwesomeIcon icon={faInstagram} className="icon_footer" />

                            <p>@boxdelux_catering</p>
                        </div>

                    </div>
                    <div className="footer_options">
                        <h1>Oferta</h1>
                        <Link to="/diety">

                        <p>Diety</p>
                        </Link>
                        <Link to="/cennik">

                        <p>Cennik</p>
                        </Link>
                    </div>
                    <div className="footer_options">
                        <h1>Dla Klienta</h1>
                        <Link to="/gdziedostarczamy">

                        <p>Gdzie dostarczamy?</p>
                        </Link>
                        <ScrollToTop>
                        <Link to="/politykaprywatnosci">
                            <p>Polityka Prywatości</p>
                        </Link>
                        </ScrollToTop>

                        <ScrollToTop>
                        <Link to="/regulamin">
                            <p>Regulamin</p>
                        </Link>
                        </ScrollToTop>
                        <Link to="/kontakt">

                        <p>Kontakt</p>
                        </Link>
                    </div>
                    <div className="footer_options">
                        <h1>Kontakt</h1>
                        <p>Biuro Obsługi Klienta
                            Tel: 514-312-711</p>
                        <p>Trzy Gracje
                        Patrycja Chodkiewicz</p>
                        <p>NIP:9522209749</p>
                    </div>

                </section>
                <section className="footer_text">
                    {/* <p>Box Delux</p> */}
                    <hr></hr>
                    <p>© 2020 by Karol Koryciński</p>
                </section>
            </footer>
        </div>
    )
}

export default footer
