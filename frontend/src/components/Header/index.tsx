import "./styles.css";
import GithubIcon from "../../assets/github.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        < header >
            <nav className="container">
                <div className="jvmovie-nav-content">
                    <NavLink to={"/"}>
                        <h1>JVMovie</h1>
                    </NavLink>
                    <a href="https://github.com/joaomenesesbsb" target="_blank" rel="noreferrer">
                        <div className="jvmovie-contact-container">
                            <img src={GithubIcon} alt="Github"></img>
                            <p className="jvmovie-contact-link">/joaomenesesbsb</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header >
    )
}