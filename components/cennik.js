import React, { Component } from 'react'
import '../styles/cennik.scss'
import { Parallax } from 'react-parallax';


export class cennik extends Component {

    state = {
        classic: {
            1200: 52,
            1500: 55,
            1800: 58,
            2000: 60,
            2500: 65

        },
        sport: {
            1200: 54,
            1500: 57,
            1800: 60,
            2000: 62,
            2500: 67,
            3000: 71,
            3500: 75,
            4000: 79
        },
        vege: {
            1200: 52,
            1500: 55,
            1800: 58,
            2000: 60,
            2500: 65
        },
        fish: {
            1200: 54,
            1500: 57,
            1800: 60,
            2000: 62,
            2500: 67

        },
        sirt:{
            "1.etap":60,
            "2.etap":60,
            "3.etap":60
        },
        sibo:{
            1200: 60,
            1500: 63,
            1800: 65,
            2000: 67,
            2500: 71

        },



        rodzaj: "classic",
        kal: 52,
        // y:2,

        cena: 60,
        cena_końcowa: 60,
        mnoznik: 1,
        rodzaj_index: "1",
        kal_index: "0",
        z_index: "1",

    }
    Increment = () => {
        this.setState({ mnoznik: this.state.mnoznik + 1 })

    }
    Decrement = () => {
        if (this.state.mnoznik > 1) {

            this.setState({ mnoznik: this.state.mnoznik - 1 })
        }
    }



    ClickButtonDieta = (e) => {
        var target = e.target.dataset
        this.setState({ rodzaj: target.rodzaj })
        this.setState({ rodzaj_index: target.index })
        this.setState({ kal_index: "-1" })

        console.log();







    }
    ClickButtonKal = (e) => {
        var target = e.target.dataset
        this.setState({ kal: target.kal })
        this.setState({ kal_index: target.index })




    }
    render() {
        // this.state.classic.map((material,index)=>{
        //     console.log(material);
        // }
        // )
        // if( this.state[this.state.rodzaj][this.state.kal]){
        //     this.setState({cena_końcowa:this.state[this.state.rodzaj][this.state.kal]})
        // }else{
        //     this.setState({cena_końcowa:"wybierz inna kalorycznosc"})

        // }

        return (

            <main className="container_all ">
                <h1 className="title">Cennik</h1>
                <section className="cennik margins">
                    <div className="opcje">
                        <p>Rodzaj diety</p>
                        <div className="buttons">
                            <button data-rodzaj="classic" data-index="1" onClick={this.ClickButtonDieta} className={this.state.rodzaj_index === "1" ? "active_button" : ""}>Dieta Classic Delux</button>
                            <button data-rodzaj="sport" data-index="2" onClick={this.ClickButtonDieta} className={this.state.rodzaj_index === "2" ? "active_button" : ""}>Dieta Sport Delux</button>
                            <button data-rodzaj="vege" data-index="3" onClick={this.ClickButtonDieta} className={this.state.rodzaj_index === "3" ? "active_button" : ""}>Dieta Vege Delux</button>
                            <button data-rodzaj="fish" data-index="4" onClick={this.ClickButtonDieta} className={this.state.rodzaj_index === "4" ? "active_button" : ""}>Dieta Vege+Fish Delux</button>
                            <button data-rodzaj="sirt" data-index="5" onClick={this.ClickButtonDieta} className={this.state.rodzaj_index === "5" ? "active_button" : ""}>Dieta Sirt Delux</button>
                            <button data-rodzaj="sibo" data-index="6" onClick={this.ClickButtonDieta} className={this.state.rodzaj_index === "6" ? "active_button" : ""}>Dieta Sibo Delux</button>
                        </div>
                        <p>Kaloryczność</p>
                        <div className="buttons">
                            {/* <button data-kal={1200} data-index="1" onClick={this.ClickButton} className={this.state.y_index === "1" ? "active_button" : ""}>1200</button>
                            <button data-kal={1500} data-index="2" onClick={this.ClickButton} className={this.state.y_index === "2" ? "active_button" : ""}>1500</button>
                            <button data-kal={1800} data-index="3" onClick={this.ClickButton} className={this.state.y_index === "3" ? "active_button" : ""}>1800</button>
                            <button data-kal={2000} data-index="4" onClick={this.ClickButton} className={this.state.y_index === "3" ? "active_button" : ""}>2000</button>
                            <button data-kal={2500} data-index="5" onClick={this.ClickButton} className={this.state.y_index === "3" ? "active_button" : ""}>2500</button>
                            <button data-kal={3000} data-index="6" onClick={this.ClickButton} className={this.state.y_index === "3" ? "active_button" : ""}>3000</button>
                            <button data-kal={3500} data-index="7" onClick={this.ClickButton} className={this.state.y_index === "3" ? "active_button" : ""}>3500</button>
                            <button data-kal={4000} data-index="8" onClick={this.ClickButton} className={this.state.y_index === "3" ? "active_button" : ""}>4000</button> */}
                            {Object.entries(this.state[this.state.rodzaj]).map(([key, value], index) => (
                                <button key={key} data-kal={value} data-index={index} onClick={this.ClickButtonKal} className={this.state.kal_index == index ? "active_button" : ""}>{key}</button>

                            ))}

                        </div >
                        {/* <p>Posiłki</p>
                        <div className="buttons">
                            <button clicked data-x={3} data-index="1" onClick={this.ClickButton} className={this.state.z_index==="1" ? "active_button":""}>Śniadanie</button>
                            <button data-x={30} data-index="2" onClick={this.ClickButton} className={this.state.z_index==="2" ? "active_button":""}>II Śniadanie</button>
                            <button data-x={30} data-index="2" onClick={this.ClickButton} className={this.state.z_index==="3" ? "active_button":""}>Obiad</button>
                            <button data-x={30} data-index="2" onClick={this.ClickButton} className={this.state.z_index==="3" ? "active_button":""}>Podwieczorek</button>
                            <button data-x={30} data-index="2" onClick={this.ClickButton} className={this.state.z_index==="3" ? "active_button":""}>Kolacja</button>
                        </div> */}
                        <p>Ilość dni</p>
                        <div className="buttons dni">
                            <button onClick={this.Decrement}>-</button>
                            <div>{this.state.mnoznik} dni</div>
                            <button onClick={this.Increment} >+</button>
                        </div>
                    </div>
                    <div className="wynik">
                        <p>Twoja dieta kosztuje:</p>
                        <h1>{this.state.kal * this.state.mnoznik} zł</h1>

                    </div>

                </section>

            </main>
        )
    }
}

export default cennik
