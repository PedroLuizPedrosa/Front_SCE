import React from 'react'

class Home extends React.Component{
    render(){
        return(
            <div className="jumbotron">
                <h1 className="display-3">Bem Vindo!</h1>
                <p className="lead">Esse é seu sistema de controle de estoque.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#/consultaProdutos" role="button">
                        <i className="fa fa-users"></i>
                        Produtos
                    </a>
                    <a className="btn btn-primary btn-lg" href="#/consultaCategorias" role="button">
                        <i className="fa fa-users"></i>
                        Categorias
                    </a>
                </p>
            </div>
        )
    }
}
export default Home