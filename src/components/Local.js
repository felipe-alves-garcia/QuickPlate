import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import "../css/local.css";

import Footer from "./Footer.js";

import estrela from "../img/avaliacao.png";

function Local (){

    const {id} = useParams();

    const [local, setLocal] = useState([]);
    
    useEffect (() => {
        fetch("https://apifakedelivery.vercel.app/restaurants/"+id, {
            method:"GET"
        }).then((resp) => {
            return resp.json();
        }).then((data) => {
            console.log(data);
            setLocal(data);
        })    
    }, [])
    
    console.log(local);

    return (
        <>
            <div className="container-fluid my-5 pb-5">
                <h2 id="tituloLocal">{local.name}</h2>
                <div className="row d-flex justify-content-center mt-5">
                    <img src={local.image} alt={local.name} id="localImg"/>
                </div>
                <div className="row d-flex justify-content-center mt-4">
                    <div className="col-2 d-flex justify-content-center align-items-center" id="localAvaliacao">
                        <img src={estrela} alt="estrela"/>
                        <p>{local.rating}</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-4">
                    <div className="col-10 col-sm-9 col-md-8 col-lg-5" id="localDesc">
                        <p>{local.description}</p>
                    </div>
                </div>
            </div>

            <Footer aba=""/>
        </>
    );
}

export default Local;