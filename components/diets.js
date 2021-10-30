import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import '../styles/diets.scss'
import {  Parallax} from 'react-parallax';
import Dieta from '../dieta.jpg'
import Classic from '../photo_diety/classic.jpeg'
import Sport from '.././photo_diety/sport.jpeg'
import Vege from '.././photo_diety/vege.jpeg'
import Vegefish from '.././photo_diety/vegefish.jpeg'
import Sibo from '.././photo_diety/sibo.jpeg'
import Sirt from '.././photo_diety/sirt.jpeg'


export class diets extends Component {
    render() {
        return (


            <main className="container_all">

            <h1 className="title inne_header">Diety</h1>

            <div className="headers_footers"></div>

            <section className="diet margins">
                    <div class="REMOVE">
                        <h2>Classic Delux</h2>
                        <p>
                        Nasza klasyczna, zbilansowana dieta zapewni Ci odpowiednią ilość energii i składników odżywczych. Każdego dnia otrzymasz urozmaicone posiłki, aby catering nigdy się nie nudził! Dieta Classic Delux zawiera produkty ze wszystkich grup: owoce, warzywa, nasiona roślin strączkowych, mleko i jego przetwory, różne rodzaje mięs, ryb, owoców morza, a także jaja, produkty zbożowe, oleje roślinne, pestki oraz orzechy.
                        </p>
                        <Link to="/classic">Czytaj więcej</Link>
                    </div>
                    <div className="REMOVE"> <img src={Classic} /></div>
                </section>
            <div className="headers_footers"></div>

            <div className="headers_footers "></div>

                <section className="diet margins">
                    <div class="REMOVE">
                        <h2>Sport Delux</h2>
                        <p>
                        Nasza dieta Sport Delux przeznaczona jest dla osób uprawiających sporty siłowe i wytrzymałościowe, dostarcza optymalną ilość białka, niezbędną do budowy masy mięśniowej. Pełnowartościowe posiłki zapewniają odpowiednią ilość energii i składników odżywczych niezbędnych dla osób aktywnych fizycznie. W ofercie mamy 8 wariantów kalorycznych, od 1200 kcal, aż do 4000 kcal.
                        </p>
                        <Link to="/sport">Czytaj więcej</Link>
                    </div>
                    <div className="REMOVE"> <img src={Sport} /></div>

                </section>
                <div className="headers_footers white"></div>

                <div className="headers_footers"></div>
                <section className="diet margins">
                    <div class="REMOVE">
                        <h2>Sirt Delux</h2>
                        <p>
                        Znana także jako dieta Adele. Wypromowana przez piosenkarkę dieta przynosi niesamowite rezultaty: pozwala na zrzucenie tkanki tłuszczowej i jednoczesne zachowanie tkanki mięśniowej, nawet przy minimalnej aktywności fizycznej! Ponadto zawarte w niej składniki sirtuinowe pozwalają zapewnić sytość mimo zaledwie 4 posiłków dziennie, w tym soków. Dieta Sirt Delux pozwoli Ci zrzucić zbędne kilogramy, poprawi Twoje samopoczucie i pozytywnie wpłynie Twój organizm, poczujesz się zdrowo i silnie!
                        </p>
                        <Link to="/sirt">Czytaj więcej</Link>

                    </div>
                    <div className="REMOVE"> <img src={Vegefish} /></div>


                </section>
                <div className="headers_footers"></div>

                <div className="headers_footers"></div>
                <section className="diet margins">
                    <div class="REMOVE">
                        <h2>Vege + Fish Delux</h2>
                        <p>
                        Stworzona w oparciu o Vege Delux, dieta Vege+Fish Delux rozszerzona jest o najsmaczniejsze ryby i owoce morza. Z diety całkowicie wykluczone jest mięso, natomiast wciąż dostarczane są wszystkie niezbędne składniki odżywcze i energia, m.in. dzięki białku z jaj, przetworzonych produktów mlecznych i nasion roślin strączkowych. W diecie odnajdziesz różnorodne warzywa, owoce, pestki i orzechy, a także bogate w węglowodany produkty zbożowe i bezglutenowe.
                         </p>
                        <Link to="/vegefish">Czytaj więcej</Link>

                    </div>
                    <div className="REMOVE"> <img src={Vegefish} /></div>

                </section>
                <div className="headers_footers "></div>

                <div className="headers_footers "></div>
                <section className="diet margins">
                    <div class="REMOVE">
                        <h2>Vege Delux</h2>
                        <p>
                        Dedykowana dla osób wykluczających z diety mięso oraz ryby. Nasza dieta Vege Delux zawiera pełnowartościowe posiłki dostarczające niezbędną energię i składniki odżywcze na cały dzień. W Vege Delux występują różnorodne produkty, m.in: owoce, warzywa, nasiona roślin strączkowych, mleko i jego przetwory, zamienniki mleka krowiego – napoje roślinne, jaja, a także produkty zbożowe – głównie pełnoziarniste, tłuszcze – oleje roślinne oraz pestki i orzechy. Menu Vege Delux skomponowane jest w taki sposób, aby dostarczać optymalną ilość białka każdego dnia!                         </p>
                        <Link to="/vegefish">Czytaj więcej</Link>

                    </div>
                    <div className="REMOVE"> <img src={Vege} /></div>

                </section>
                <div className="headers_footers "></div>

                <div className="headers_footers "></div>
                <section className="diet margins">
                    <div class="REMOVE">
                        <h2>Sibo Delux</h2>
                        <p>
                        Nasza autorska dieta Sibo Delux przeznaczona jest dla osób chorych na SIBO, u których występuje przerost bakteryjny w jelitach. Sibo Delux wyklucza produkty będące pokarmem dla niechcianych bakterii, m.in. zboża, nabiał, cukry złożone. Sibo Delux zapewnia odpowiednią ilość energii i składników odżywczych poprzez zawarte w diecie mięsa, ryby, warzywa, orzechy, miód i rośliny strączkowe. Zaoszczędź swój czas i pozwól nam o siebie zadbać!                        </p>
                        <Link to="/vegefish">Czytaj więcej</Link>

                    </div>
                    <div className="REMOVE"> <img src={Sibo} /></div>

                </section>

                <div className="headers_footers "></div>

            </main>


        )
    }
}

export default diets
