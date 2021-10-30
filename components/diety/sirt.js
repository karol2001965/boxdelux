import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Dieta from '../../dieta.jpg'
import '../../styles/diets_pelny.scss'
import Classic from '../../photo_diety/classic.jpeg'
// import Sirt2 from '../../photo_diety/sirt2.jpg'
// import Sirt3 from '../../photo_diety/sirt3.jpg'
import Classic2 from '../../photo_diety/classic2.jpg'
import Classic3 from '../../photo_diety/classic3.jpg'

import Sport from '../../photo_diety/sport.jpeg'
import Vege from '../../photo_diety/vege.jpeg'
import Vegefish from '../../photo_diety/vegefish.jpeg'
import Sibo from '../../photo_diety/sibo.jpeg'



export class diets_pelny extends Component {
    render() {
        return (
            <>
            <main class="container_all">
                <section className="margins makro_container">
                    <h2 className="makro_header">Średni rozkład makroskładników w Sirt Delux</h2>
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

                    <div class="REMOVE sirt_long">

                        <h2> Dieta Sirt Delux</h2>
                        <p>
                        Dieta Sirt Delux jest idealnym rozwiązaniem dla osób, które chcą zredukować swoją masę ciała, poprawić kondycję swoich komurek i zadbać o zdrowie. Ta dieta pozwala na zrzucenie tkanki tłuszczowej, nie tracąc przy tym tkanki mięśniowej. Główne założenie polega na włączeniu do diety produktów zawierających sirtuiny, takich jak kakao, tofu, zielona herbata, oliwa z oliwek extra virgin, czerwona cebula, pietruszka, jarmuż lub orzechy włoskie. Te produkty regulują procesy metaboliczne organizmu. Największym wyzwaniem są pierwsze trzy dni, kiedy spożycie kalorii jest ograniczone do 1000 kalorii – w postaci 3 soków i jednego posiłku stałego. Pomimo tego, rzadko można spotkać się z uczuciem głodu, a ponadto Dieta Sirt Delux ma pozytywny wpływ na poziom energii życiowej i poprawę samopoczucia i zdrowia. Kolejny etap to już 1500 kcal. Każdego dnia dieta składa się z 2 soków oraz 2 posiłków stałych. Po pierwszym tygodniu przechodzimy do FAZY 2. Jest to 14-dniowy okres kontynuacji programu. Nie jest on już tak restrykcyjny, ponieważ zawiera zaledwie 1 sok i 3 posiłki stałe, jednak w tym okresie chodzi o to, aby umocnić efekt utraty wagi i nadal spokojnie tracić kolejne kilogramy.
<br></br>
Cały urok diety sirtuinowej polega na tym, że wcale nie trzeba być stale na diecie. Fazę pierwszą i drugą można powtarzać co pewien czas, aby w razie potrzeby pobudzić organizm do spalania tłuszczu.
<br></br>
To co, jesteście gotowi podjąć się naszej Diety Sirt Delux?
                         </p>
                    </div>

                    {/* <div className="REMOVE"> <img src={Sibo2} /></div> */}
                    <div className="REMOVE"> <img src={Classic2} /></div>
                </section>
                <section className="diet margins">

                    <div class="REMOVE">

                        <h2>Kaloryczność</h2>
                        <div className="kalorie_container">
                            <div className="kalorie">
                                <p>1.etap</p>
                                <p>60 zł</p>
                            </div>
                            <div className="kalorie">
                                <p>2.etap</p>
                                <p>60 zł</p>
                            </div>
                            <div className="kalorie">
                                <p>3.etap</p>
                                <p>60 zł</p>
                            </div>

                        </div>
                    </div>

                    {/* <div className="REMOVE"> <img src={Sibo3} /></div> */}
                    <div className="REMOVE"> <img src={Classic3} /></div>

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
                        <h2>Vege + Fish Delux</h2>
                        <p>
                        Stworzona w oparciu o Vege Delux, dieta Vege+Fish Delux rozszerzona jest o najsmaczniejsze ryby i owoce morza. Z diety całkowicie wykluczone jest mięso, natomiast wciąż dostarczane są wszystkie niezbędne składniki odżywcze i energia, m.in. dzięki białku z jaj, przetworzonych produktów mlecznych i nasion roślin strączkowych. W diecie odnajdziesz różnorodne warzywa, owoce, pestki i orzechy, a także bogate w węglowodany produkty zbożowe i bezglutenowe.
                         </p>
                        <Link to="/vegefish">Czytaj więcej</Link>

                    </div>
                    <div className="REMOVE"> <img src={Vegefish} /></div>

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
