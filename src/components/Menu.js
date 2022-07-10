import react from "react";
import './menu.css'

const Menu = () => {
    return(
        <header>
            <div className="container">
                <div className="logo">
                    <h1>Pokémon</h1>
                </div>
                <nav className="menu-desk">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Desenvolvedor</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Menu;