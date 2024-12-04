import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import "../css/comida.css";

import Footer from "./Footer.js";

import estrela from "../img/avaliacao.png";

function Comida (){

    const {id} = useParams();
    const [idRest, setIdRest] = useState(0);

    const [comida, setComida] = useState([]);
    
    useEffect (() => {
        fetch("https://apifakedelivery.vercel.app/foods/"+id, {
            method:"GET"
        }).then((resp) => {
            return resp.json();
        }).then((data) => {
            console.log(data);
            setComida(data);
            setIdRest(data.restaurantId);
        })    
    }, [])
    
    console.log(comida);

    const [local, setLocal] = useState([]);
    
    useEffect (() => {
        fetch("https://apifakedelivery.vercel.app/restaurants/"+idRest, {
            method:"GET"
        }).then((resp) => {
            return resp.json();
        }).then((data) => {
            console.log(data);
            setLocal(data);
        })    
    }, [idRest])
    
    console.log(local);

    return (
        <>
            <div className="container-fluid my-5 pb-5">
                <h2 id="tituloComida">{comida.name}</h2>
                <div className="row d-flex justify-content-center mt-5">
                    <div id="comidaImg">
                        <a id="foodRest" href={`/local/${local.id}`}>
                            <img src={local.image}/>
                        </a>
                        <img src={comida.image} alt={comida.name}/>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-4">
                    <div className="col-2 d-flex justify-content-center align-items-center" id="comidaAvaliacao">
                        <img src={estrela} alt="estrela"/>
                        <p>{comida.rating}</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-1">
                    <div className="col-12 px-4" id="comidaDesc">
                        <p><b>- Preço:</b>  R${comida.price}</p>
                        <p><b>- Entrega:</b>  R${comida.delivery}</p>
                        <p><b>- Tempo:</b>  {comida.time}</p>
                        <p><b>- Restaurante:</b>  {local.name}</p>
                        <h3>Descrição</h3>
                        <p>{comida.description}</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-5 mb-5">
                    <button id="foodBotao" className="bg3 py-3">Comprar</button>
                </div>
            </div>

            <Footer aba=""/>
        </>
    );
}

export default Comida;