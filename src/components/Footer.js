import {useState, useEffect} from "react";

function Footer (props){
    const [home, setHome] = useState("a navItem navDisponivel");
    const [locais, setLocais] = useState("a navItem navDisponivel");
    const [comidas, setComidas] = useState("a navItem navDisponivel");
    const [conta, setConta] = useState("a navItem navDisponivel");

    useEffect(() => {
        if(props.aba === "locais"){
            setLocais("a navItem navSelecionado");
        }
        else if(props.aba === "comidas"){
            setComidas("a navItem navSelecionado");
        }
        else if(props.aba === "conta"){
            setConta("a navItem navSelecionado");
        }
        else if(props.aba === "home"){
            setHome("a navItem navSelecionado");
        }   
    }, []);

    return(
        <>
            <footer className="d-flex justify-content-center mt-1 py-2">
                <a className={home} href="/">
                    <i className="bi bi-house"></i>
                    <p>Home</p>
                </a>
                <a className={locais} href="/locais">
                    <i className="bi bi-shop"></i>                    
                    <p>Locais</p>
                </a>
                <a className={comidas} href="/comidas">
                    <i className="bi bi-basket3"></i>            
                    <p>Comidas</p>
                </a>
                <a className={conta} href="/conta">
                    <i className="bi bi-person"></i>                    
                    <p>Conta</p>
                </a>
            </footer>
        </>
    );
}

export default Footer;