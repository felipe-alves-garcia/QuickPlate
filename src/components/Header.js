import logo from "../img/logo.png";

function Header (){


    return (
        <>
            <header className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <a className="a"></a>
                        <img src={logo} className="m-3 ms-md-4" alt="logo: Quick Plate" id="logo"/>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;