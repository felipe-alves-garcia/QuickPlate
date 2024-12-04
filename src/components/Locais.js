import "../css/locais.css";
import {useEffect, useState} from "react";
import Footer from "./Footer.js";

import estrela from "../img/avaliacao.png";

function Locais (){

    const [restaurantes, setRestaurantes] = useState([]);
    
    useEffect (() => {
        fetch("https://apifakedelivery.vercel.app/restaurants", {
            method:"GET"
        }).then((resp) => {
            return resp.json();
        }).then((data) => {
            console.log(data);
            setRestaurantes(data);
        })    
    }, [])
    
    console.log(restaurantes);

    return (
        <>
            <div className="container-fluid my-5 pb-5">
                <h2 id="tituloRest">Restaurantes</h2>
                <div className="row mx-3 mt-5">
                    { restaurantes.map((rest) => {
                        return (
                            <>  
                                <a className="a col-12 d-flex my-1" id="restCard" href={`/local/${rest.id}`}>
                                    <div id="restImg" className="me-2">
                                        <img src={rest.image} alt={rest.name}/>
                                    </div>
                                    <div id="restDiv" className="d-flex flex-column align-items-start justify-content-center">
                                        <p key={rest.id} id="restNome">{rest.name}</p>
                                        <p key={rest.id} id="restDesc" className="d-none d-md-block">{rest.description}</p>
                                        <img src={estrela} alt="estrela" id="restRatingImg"/>
                                        <p key={rest.id} id="restRating">{rest.rating}</p>
                                    </div>     
                                </a>
                            </>
                        )
                    })}
                </div>
            </div>

            <Footer aba="locais"/>

        </>
    );
}

export default Locais;