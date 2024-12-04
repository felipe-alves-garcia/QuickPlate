import {useState, useEffect} from "react";

import "../css/locais.css";
import "../css/comidas.css";

import estrela from "../img/avaliacao.png";

import Footer from "./Footer.js";

function Home (){

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

    const [comidas, setComidas] = useState([]);

    useEffect(() => {
        fetch("https://apifakedelivery.vercel.app/foods", {
            method:"GET"
        }).then((resp) => {
            return resp.json();
        }).then((data) => {
            console.log(data);
            setComidas(data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

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

            <div className="container-fluid my-5 pb-5">
                <h2 id="tituloRest">Comidas</h2>
                <div className="row mt-5">
                    {comidas.map((food) => {
                        return (
                            <>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-3">
                                    <a class="a d-flex align-items-center flex-column" id="foodCard" href={`/comida/${food.id}`}>
                                        <div id="foodImg">
                                            <img src={food.image} alt={food.name}/>
                                        </div>
                                        <div className="row position-relative mt-2 w-100">
                                            <p key={food.id} id="foodNome">{food.name}</p>
                                            <div id="foodAvaliacao">  
                                                <img src={estrela} alt="estrela"/>
                                                <p key={food.id}>{food.rating}</p>
                                            </div>
                                        </div>
                                        <div className="row w-100 mt-3" id="foodPreco">
                                            <p key={food.id}>R${food.price} + (R${food.delivery} entrega)</p>    
                                        </div>    
                                    </a>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>

            <Footer aba="home"/>
        </>
    );
}

export default Home;