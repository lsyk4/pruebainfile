import { Link } from "react-router-dom"
import Ping from "./ping"
export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="/">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/registrar">Registrar</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><Ping /></a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}