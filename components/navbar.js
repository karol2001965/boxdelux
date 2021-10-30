import React, { Component } from 'react'
import '../styles/navbar.scss'
import Photo from '../logo.png'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
// import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'



export class navbar extends Component {

    state = {
        active: false,
        hoverOne: false,
        theposition: -100,
        checked_diety:false,
        checked_firma:false,



    };

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        let vhs = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vhs}px`);

        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            vhs * 100

        const scrolled = winScroll / height * 100
        if(scrolled===0){
        this.setState({
            theposition: false,
        })
    }
        if(scrolled>0 && scrolled<10){
        this.setState({
            theposition: true,
        })
    }

    }



    handlerhref = (e) => {
        e.stopPropagation();
        this.setState({ active: !this.state.active });
        const body = document.querySelector("body");
        body.classList.toggle("toggle_body");


    }

    handlerBurger = () => {
        this.setState({ active: !this.state.active })
        const body = document.querySelector("body");

        body.classList.toggle("toggle_body");
        // console.log(window.pageYOffset);
    }


    isCheckedDiety=()=>{
        this.setState({checked_diety:!this.state.checked_diety})
    }
    isCheckedFirma=()=>{
        this.setState({checked_firma:!this.state.checked_firma})
    }




    menuRollOpenOne = () => {
        this.setState({ hoverOne: !this.state.hoverOne })
    }
    render() {
        // console.log(window.pageYOffset);
        console.log("witam");
        return (
            <nav className={this.state.theposition ===true ? " container container_anim " : " container " && this.state.active == true ? "container container_anim_phone" : "container"}  >
                <div className=" container_nav ">
                    <Link to="/" onClick={this.handlerhref} ><img src={Photo} className="logo"></img></Link>

                    <section className={this.state.active ? " elements_container  navbar_phone_active" : " elements_container "}>

                        <div  className="element">
                            <Link to="/firma" onClick={this.handlerhref} className={this.state.active  ? "element_anim roll_p " : "roll_p"}>Firma</Link>
                            <input type="checkbox" name="a" id="a" class="css-checkbox" onChange={this.isCheckedFirma}/>
                                <label for="a" class="css-label">
                            <FontAwesomeIcon icon={faPlus}  className="plus" />
                            <FontAwesomeIcon icon={faMinus}  className="minus" />
                                </label>
                        </div>

                        <div className={this.state.hoverOne || this.state.checked_firma? " menu_roll menu_roll_open" : "menu_roll "}>
                            <Link to="/onas" onClick={this.handlerhref}  className="roll_option">
                                O nas
                            </Link>
                            <Link to="/wspolpraca"onClick={this.handlerhref}  className="roll_option">Współpraca</Link>
                        </div>


                        <div  className="element long_diety">

                            <Link to="/diety" onClick={this.handlerhref}  className={this.state.active ? "element_anim1 roll_p " : "roll_p"}>Nasze diety</Link>

                            <input type="checkbox" name="a_diety" id="a_diety" class="css-checkbox_diety" onChange={this.isCheckedDiety} />

                                <label for="a_diety" class="css-label_diety">
                            <FontAwesomeIcon icon={faPlus}  className="plus_diety" />
                            <FontAwesomeIcon icon={faMinus}  className="minus_diety" />
                                </label>

                        </div>
                        <div className={this.state.hover || this.state.checked_diety ? " menu_roll menu_roll_open" : "menu_roll"}>


                            <Link to="/classic" onClick={this.handlerhref} className="roll_option">Classic Delux</Link>
                            <Link to="/sport" onClick={this.handlerhref} className="roll_option">Sport Delux</Link>
                            <Link to="/sirt" onClick={this.handlerhref} className="roll_option">Sirt Delux</Link>
                            <Link to="/sibo" onClick={this.handlerhref} className="roll_option">Sibo Delux</Link>
                            <Link to="/vegefish" onClick={this.handlerhref} className="roll_option">Vege + Fish Delux</Link>
                            <Link to="/vege" onClick={this.handlerhref} className="roll_option">Vege Delux</Link>
                        </div>



                        <Link to="/cennik" onClick={this.handlerhref} className="element">
                            <p className={this.state.active ? "element_anim3  " : ""}>Cennik</p>
                        </Link>
                        <Link to="/gdziedostarczamy" onClick={this.handlerhref} className="element long" >
                            <p className={this.state.active ? "element_anim2  " : ""}>Gdzie dostarczamy?</p>
                        </Link>
                        <Link to="/kontakt" onClick={this.handlerhref} className="element">
                            <p className={this.state.active ? "element_anim3  " : ""}>Kontakt</p>
                        </Link>
                        <a href="https://sklep.boxdelux.pl/zamowienie/#/" onClick={this.handlerhref} className="element long_zamow">
                            <p className={this.state.active ? "element_anim3  " : ""}>Zamów dietę</p>
                        </a>
                    </section>
                    <div className={this.state.active ? " burger toggle_burger" : " burger"} onClick={this.handlerBurger}>

                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default navbar
