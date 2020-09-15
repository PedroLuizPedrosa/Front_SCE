import React from 'react'
import CadastroProduto from '../views/produtos/cadastroProduto'
import CadastroCategoria from '../views/categorias/cadastroCategoria'
import Home from '../views/home'
import ConsultaProdutos from '../views/produtos/consultaProdutos'
import ConsultaCategorias from '../views/categorias/consultaCategorias'

import { Route, Switch, HashRouter } from 'react-router-dom'

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/cadastroProduto" component={CadastroProduto} />
                <Route path="/home" component={Home} />
                <Route path="/cadastroCategoria" component={CadastroCategoria} />
                <Route path="/consultaProdutos" component={ConsultaProdutos} />
                <Route path="/consultaCategorias" component={ConsultaCategorias} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas