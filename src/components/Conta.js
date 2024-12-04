import {useEffect, useState} from "react";
import "../css/conta.css";
import Footer from "./Footer.js";

import semFoto from "../img/semFoto.jpeg";

function Conta (){
    
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("https://apifakedelivery.vercel.app/users", {
            method: "GET"
        }).then((resp) => {
            resp = resp.json();
            return resp;
        }).then((data) =>{
            console.log(data)
            setUser(data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    

    return (
        <>
            <div>
                {user.map((usuario) => {
                    return (
                        <>
                            <div className="mt-5 bg2 ps-0 ps-sm-5" id="userDiv">
                                <div id="userFoto" className="bg2 me-4 me-0 me-sm-5 ">
                                    <img src={semFoto} alt=""/>
                                </div>
                                <div id="userInfo">
                                    <p><b>Nome:</b> {usuario.name}</p>
                                    <p><b>Email:</b> {usuario.email}</p>
                                    <p><b>Senha:</b> {usuario.senha}</p>
                                    <p><b>Saldo:</b> {usuario.saldo}</p>    
                                </div>
                            </div>      
                        </>
                    );
                    
                })}    
            </div>
            
            
            
            <Footer aba="conta"/>
        </>
    );
}

export default Conta;