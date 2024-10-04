import "./style-header.css"
import { Link } from "react-router-dom"

export default function Header() {
    <>
        <div id="header">
            <Link to="/">
                <p className="campos">Home</p>
            </Link>
            <Link to="/sobre">
                <p className="campos">Sobre o projeto</p>
            </Link>
        </div>
    </>
}
