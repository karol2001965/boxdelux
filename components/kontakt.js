import React, { Component } from 'react'

import '../styles/kontakt.css'
import { Parallax } from 'react-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com'





export class kontakt extends Component {
    state={
        checked:false,
        send:false,
        error:false
    }
    isChecked=()=>{
        this.setState({checked:!this.state.checked})
        console.log(this.state.checked)
    }
     sendEmail=(e)=> {

            e.preventDefault();
        if(this.state.checked==true){
            emailjs.sendForm()
                .then((result) => {
                    this.setState({send:!this.state.send})
                }, (error) => {
                    this.setState({error:!this.state.error})

                });
            e.target.reset();
        }else{
            alert("zgoda zazanaczona")
        }


    }

    render() {
        const sent=
        <p>WYSŁANO</p>

        const error=<p>WYSŁANO</p>
                    console.log(this.state.send)
                    console.log(this.state.error)
        return (
            <main className="container_all" id="kontakt">

            <h1 className="title">Kontakt</h1>
            {/* <img src={Tree} className="tree"></img> */}
            {/* <img src={Tree} className="tree"></img> */}


            {/* <img src={Tree} className="tree2"></img> */}
            {/* <img src={Tree} className="tree2"></img> */}
            <div className="headers_footers"></div>

            <div class="kontakt margins">

                <section className="adress">
                    <FontAwesomeIcon icon={faMapMarkedAlt} className="icon_kontakt" />


                    <p>Warszawa</p>
                </section>
                <section className="phone">
                    <FontAwesomeIcon icon={faPhone} className="icon_kontakt" />
                    <p>Biuro Obsługi Klienta:<br /> 514-312-711</p>
                </section>
                <section className="phone">
                <FontAwesomeIcon icon={faEnvelope} className="icon_kontakt" />
                    <p>E-mail:<br /> boxdelux@wp.pl</p>
                </section>

            </div>



            <h1 className="title" id="formularz_kontaktowy">Albo... Napisz do nas!</h1>
            <div className="formularz margins">
                <form onSubmit={this.sendEmail}>
                    <input placeholder="Imię" name="name"></input>

                    <input placeholder="E-mail" name="email"></input>

                    <textarea placeholder="Treść wiadomości" name="message"></textarea>

                    <section className="chceckbox_container">
                        <input type="checkbox" className="chceckbox" onChange={this.isChecked}></input>Wyrażam zgode na przetwarzanie danych osobowych
                        </section>


                    <input type="submit" className="submit" value="Wyślij"></input>


                </form>
                {this.state.send? <p>WYSŁANO</p> : ""}
                    {this.state.error? <p>WYSŁANO</p> : ""}
            </div>

        </main>
        )
    }
}

export default kontakt

