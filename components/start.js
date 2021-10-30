import React, { Component } from 'react'
import '../styles/start.scss'
import Diets from'./diets';

import { Background, Parallax, } from 'react-parallax';
import Logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal,faUsers, faUtensils } from '@fortawesome/free-solid-svg-icons'

export class start extends Component {
    render() {
        return (
            <>
                <Parallax
                bgImage={require('../../src/tlo3.jpg')}
                // blur={{ min: -15, max: 15 }}
                bgImageAlt="the dog"
                strength={500}>
                <section className="bg_image"><img src={Logo}/></section>
                </Parallax>

                <main className="container_all">

                <h1 className="title wyroznia_header" >Box Delux - co nas wyróżnia?</h1>

                    <section className="wyroznienia margins">

                        <div className="wyroznienia_opcje">
                            <FontAwesomeIcon icon={faMedal}  className="wyroznienia_icon" />
                            <h2>Jakość</h2>
                            <p>Nasza marka oferuje najwyższą jakość. Do przygotowywania posiłków wykorzystujemy wyłącznie najlepszych, świeżych i sprawdzonych produktów spożywczych. Nasze diety zostały stworzone pod czujnym okiem specjalistów.</p>
                        </div>

                        <div className="wyroznienia_opcje">
                            <FontAwesomeIcon icon={faUtensils} className="wyroznienia_icon" />
                            <h2>Różnorodność</h2>
                            <p>
                            Tutaj nie ma miejsca na nudę! Mamy wszystko co najlepsze i najzdrowsze, inspirując się kuchniami z całego świata, przygotowujemy różnorodne, ciekawe menu, aby każdy dzień Twojej diety był kulinarną podróżą i niesamowitym doznaniem.                            </p>
                        </div>

                        <div className="wyroznienia_opcje">
                            <FontAwesomeIcon icon={faUsers} className="wyroznienia_icon" />
                            <h2>Profesjonalny zespół</h2>
                            <p>
                            Do naszego zespołu należą profesjonalni, wykształceni i doświadczeni kucharze oraz dietetycy, którzy każdego dnia dbają o to, aby zapewnić Wam najlepsze doznania kulinarne i pozwolić na odkrywanie nowych smaków!                            </p>
                        </div>


                    </section>


                    <section className="instagram margins">
                        <div className="instagram_text">
                            <h2>Instagram</h2>
                            <div className="instagram_link">
                                <p>@boxdelux_catering</p>
                            </div>
                        </div>
                        <div className="instagram_photo">
                            <div className="photo_prb"></div>
                            <div className="photo_prb"></div>
                            <div className="photo_prb"></div>
                            <div className="photo_prb"></div>
                            <div className="photo_prb"></div>
                            <div className="photo_prb"></div>
                        </div>
                    </section>
                </main>
                <Diets/>

            </>
        )
    }
}

export default start
