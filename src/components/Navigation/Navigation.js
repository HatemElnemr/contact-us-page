import logo from "../../images/logo (1).png"
import "./Navigation.module.css"
function Navigation() {
    return(
        <nav className="container">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navigation;