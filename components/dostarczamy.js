import React, { Component } from 'react'
import '../styles/dostarczamy.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faKeyboard, faSadTear, faSmileWink } from '@fortawesome/free-solid-svg-icons'

export class dostarczamy extends Component {
    state={
        button_clicked:false,
        match:false,
        kod_active:"",
       kody: [
"05-075",
"05-077",
"05-080",
"05-092",
"05-850",
"05-082",
"05-091",
"05-123",
"05-110",
"05-101",
"05-118",
"05-119",
"05-120",
"05-126",
"05-135",
"05-074",
"05-079",
"05-071",
"05-152",
"05-410",
"05-420",
"05-480",
"05-400",
"05-462",
"05-532",
"05-510",
"05-520",
"05-506",
"05-501",
"05-552",
"05-500",
"05-502",
"05-840",
"05-804",
"05-808",
"05-806",
"05-816",
"05-830",
"05-820",
"05-800",
"05-090",
"02-188",
"02-191",
"02-194",
"02-195",
"02-196",
"02-197",
"02-198",
"02-284",
"02-295",
"02-296",
"02-298",
"02-299",
"05-083",
"05-230",
"05-270",
"05-200",
"05-220",
"96-314",
"05-825",
"05-827",
"96-316",
"96-313",
"05-822",
"05-807",
"96-321",
"05-651",
"05-650",
"05-600",
"05-652",
"05-127",
"05-124",
"05-311",
"05-300",
"05-304",
"05-156",
"05-100",
"05-102",
"05-160",
"05-180",
"05-430",
"05-340",
"05-408",
"05-507",
"05-530",
"05-503",
"05-504",
"05-540",
"05-505",
"05-555",
"05-805",
"05-831",
"96-516",
"96-515",
"05-084",
"05-870",
"05-085",
"05-860",
"05-205",
"05-326",
"05-255",
"05-250",
"96-320",
"96-323",
"96-325",
"96-300",
"96-315",
"96-500",
"96-513",
"96-317",
"05-252",
"05-240",
"05-140",
"05-131",
"05-130",
"06-100",
"06-200",
"06-400",
"06-410",
"06-413",
"09-100"
]
    }

    inputChange=(e)=> {

        this.setState({kod_active:e.target.value})


    }
    buttonCheck=(e)=> {
        this.setState({match:false})
        this.setState({button_clicked:true})

        if(this.state.kod_active.length==6){
            if(this.state.kod_active.substring(0,1)=="0"&&this.state.kod_active.substring(1,2)<=4){
                this.setState({match:true})

            }else{
            for(var el of this.state.kody){
                        if(this.state.kod_active==el){
                            this.setState({match:true})
                            break;
                        }
                    }
        }
    }

    }

    render() {
        console.log(this.state.kod_active);

        return (
            <main className="container_all">
                <h1 className="title">Gdzie dostarczamy?</h1>
                <section className="margins dostarczamy">
                    <div className="input_button">
                    <input  onChange={this.inputChange} type="text" placeholder="np. 01-888"></input>
                    <button  onClick={this.buttonCheck}>SPRAWDŹ</button>
                    </div>
                    {/* {this.state.kod_active.length!==6?<p>Wpisz kod</p>:<p>Kliknij "sprawdź"</p>} */}
                    {this.state.button_clicked? this.state.match?
                    <div className="odpowiedz tak"><p>W wybybraną przez Ciebie lokalizację dostarczamy</p>
                    <FontAwesomeIcon icon={faSmileWink} className="icon_dostarczamy" />
                    </div>
                     :
                     <div className="odpowiedz nie"><p>W wybybraną przez Ciebie lokalizację niestety nie dostarczamy</p>
                    <FontAwesomeIcon icon={faSadTear} className="icon_dostarczamy" />
                    </div>

                     :
                     <div className="odpowiedz wpisz_kod ">
                     <p>WPISZ KOD</p>
                    <FontAwesomeIcon icon={faKeyboard} className="icon_dostarczamy" />

                     </div>
                     }
                </section>
            </main>

        )
    }
}

export default dostarczamy
