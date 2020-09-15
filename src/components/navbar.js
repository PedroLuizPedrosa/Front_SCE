import React from 'react';
import NavbarItem from './navbarItem'

function Navbar() {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <a className="navbar-brand" href="#/home">Estoque</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarColor03" aria-controls="navbarColor03" 
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    <NavbarItem href="#/consultaProdutos" label="Produtos" />
                    <NavbarItem href="#/consultaCategorias" label="Categorias" />
                </ul>
            </div>
        </div>
    )
}
export default Navbar