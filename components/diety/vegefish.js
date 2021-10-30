import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Dieta from '../../dieta.jpg'
import '../../styles/diets_pelny.scss'
import Classic from '../../photo_diety/classic.jpeg'

import Vegefish2 from '../../photo_diety/vegefish2.jpg'
import Vegefish3 from '../../photo_diety/vegefish3.jpg'
import Sport from '../../photo_diety/sport.jpeg'
import Vege from '../../photo_diety/vege.jpeg'
import Sibo from '../../photo_diety/sibo.jpeg'
import Sirt from '../../photo_diety/sirt.jpeg'



export class diets_pelny extends Component {
    render() {
        return (
            <>
            <main class="container_all">
                <section className="margins makro_container">
                    <h2 className="makro_header">Średni rozkład makroskładników w Vege+Fish Delux</h2>
                    <div className="makro">
                    <div>
                        <h2>20%</h2>
                        <p>białko</p>
                        <p>różne rodzaje mięs oraz ryb</p>
                    </div>
                    <div>
                        <h2>25%-35%</h2>
                        <p>tłuszcz</p>
                        <p>oleje roślinne oraz pestki i orzechy</p>
                    </div>
                    <div>
                        <h2>45%-55%</h2>
                        <p>węglowodany</p>
                        <p>produkty zbożowe(zwłaszcza pełnoziarniste)</p>
                    </div>
                    </div>
                </section>


                <section className="diet margins">

                    <div class="REMOVE">

                        <h2> Dieta Vege+Fish Delux</h2>
                        <p>
                        Chcesz wyeliminować ze swojej diety mięso, ale nie chcesz rezygnować z ryb i owoców morza? Oto nasza propozycja dla Ciebie. Dieta Vege+Fish Delux ma zbilansowane menu, które dostarczy Ci wszystkich niezbędnych składników odżywczych i energii na cały dzień. Nie poczujesz głodu, ani uczucia ciężkości z przejedzenia. Posiłki Vege+Fish Delux są sycące, smaczne i zdrowe. W diecie znajdują się ryby, owoce morza, jaja, produkty mleczne, warzywa, owoce, rośliny strączkowe, produkty zbożowe oraz tłuszcze roślinne. Dania są właściwie zbilansowane i pełnowartościowe. Vege+Fish Delux jest alternatywą dla menu wegańskiego lub wegetariańskiego.
         </p>
                    </div>

                    <div className="REMOVE"> <img src={Vegefish2} /></div>
                </section>
                <section className="diet margins">

                    <div class="REMOVE">

                        <h2>Kaloryczność</h2>
                        <div className="kalorie_container">
                        <div className="kalorie">
                                <p>1200 kcal</p>
                                <p>54 zł</p>
                            </div>
                            <div className="kalorie">
                                <p>1500 kcal</p>
                                <p>57 zł</p>
                            </div>
                            <div className="kalorie">
                                <p>1800 kcal</p>
                                <p>60 zł</p>
                            </div>
                            <div className="kalorie">
                                <p>2000 kcal</p>
                                <p>62 zł</p>
                            </div>
                            <div className="kalorie">
                                <p>2500 kcal</p>
                                <p>67 zł</p>
                            </div>
                        </div>
                    </div>

                    <div className="REMOVE"> <img src={Vegefish3} /></div>

                </section>










                <h1 className="title">Inne diety</h1>

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
                <section className="diet margins">
                    <div class="REMOVE">
                        <h2>Sirt Delux</h2>
                        <p>
                        Znana także jako dieta Adele. Wypromowana przez piosenkarkę dieta przynosi niesamowite rezultaty: pozwala na zrzucenie tkanki tłuszczowej i jednoczesne zachowanie tkanki mięśniowej, nawet przy minimalnej aktywności fizycznej! Ponadto zawarte w niej składniki sirtuinowe pozwalają zapewnić sytość mimo zaledwie 4 posiłków dziennie, w tym soków. Dieta Sirt Delux pozwoli Ci zrzucić zbędne kilogramy, poprawi Twoje samopoczucie i pozytywnie wpłynie Twój organizm, poczujesz się zdrowo i silnie!
                        </p>
                        <Link to="/sirt">Czytaj więcej</Link>

                    </div>
                    <div className="REMOVE"> <img src={Dieta} /></div>


                </section>

                <section className="diet margins">
                    <div class="REMOVE">
                        <h2>Vege Delux</h2>
                        <p>
                        Dedykowana dla osób wykluczających z diety mięso oraz ryby. Nasza dieta Vege Delux zawiera pełnowartościowe posiłki dostarczające niezbędną energię i składniki odżywcze na cały dzień. W Vege Delux występują różnorodne produkty, m.in: owoce, warzywa, nasiona roślin strączkowych, mleko i jego przetwory, zamienniki mleka krowiego – napoje roślinne, jaja, a także produkty zbożowe – głównie pełnoziarniste, tłuszcze – oleje roślinne oraz pestki i orzechy. Menu Vege Delux skomponowane jest w taki sposób, aby dostarczać optymalną ilość białka każdego dnia!                         </p>
                        <Link to="/vegefish">Czytaj więcej</Link>

                    </div>
                    <div className="REMOVE"> <img src={Vege} /></div>

                </section>
                <section className="diet margins">
                    <div class="REMOVE">
                        <h2>Sibo Delux</h2>
                        <p>
                        Nasza autorska dieta Sibo Delux przeznaczona jest dla osób chorych na SIBO, u których występuje przerost bakteryjny w jelitach. Sibo Delux wyklucza produkty będące pokarmem dla niechcianych bakterii, m.in. zboża, nabiał, cukry złożone. Sibo Delux zapewnia odpowiednią ilość energii i składników odżywczych poprzez zawarte w diecie mięsa, ryby, warzywa, orzechy, miód i rośliny strączkowe. Zaoszczędź swój czas i pozwól nam o siebie zadbać!                        </p>
                        <Link to="/sibo">Czytaj więcej</Link>

                    </div>
                    <div className="REMOVE"> <img src={Sibo} /></div>

                </section>



            </main>

            </>

        )
    }
}

export default diets_pelny
