import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import ProdutoService from '../../app/service/produtoService'
import * as messages from '../../components/toastr'

class ConsultaProdutos extends React.Component {

    state = {
        codBarras: '',
        nome: '',
        descricao: '',
        categoria: '',
        produtos: []
    }

    constructor() {
        super();
        this.produtoService = new ProdutoService();
    }

    buscar = () => {

        const produtoFitro = {
            codBarras: this.state.codBarras,
            nome: this.state.nome,
            descricao: this.state.descricao,
            quantidade: this.state.quantidade
        }

        this.produtoService
            .consultar(produtoFitro)
            .then(resposta => {

                this.setState({ produtos: resposta.data })

                //const produtos = resposta.data;

                /*if(lista.length < 1){
                    messages.mensagemAlerta("Nenhum Produto encontrado.");
                }

                this.setState({produtos: lista})*/
            }).catch(error => {
                console.log(error)
            })
    }


editar = (id) => {
    this.history.push(`/cadastroProdutos/${id}`)
}

prepararFormularioCadastro = () => {
    this.props.history.push('/cadastroProduto')
}

deletar = (produto) => {
    this.ProdutoService
        .deletar(produto)
        .then(response => {
            const produtos = this.state.produto;
            const index = produtos.indexOf(this.state.produtoDeletar)
            produtos.splice(index, 1);
            this.setState({ produtos: produtos})
            messages.mensagemSucesso('Produto deletado com sucesso!')
        }).catch(error => {
            messages.mensagemErro('Ocorreu um erro ao tentar deletar o Produto')
        })
}

render() {

    const rows = this.state.produtos.map( produto => {
        return (
            <tr key={produto.id} >
                <td> {produto.codBarras} </td>
                <td> {produto.nome} </td>
                <td> {produto.descricao} </td>
                <td> {produto.quantidade} </td>
                <td> {produto.categoria} </td>
                <td>
                    <button type="button" title="Editar"
                        className="btn btn-primary"
                        onClick={e => this.editar(produto.id)}>
                        Editar
                    </button>
                    <button type="button" title="Excluir"
                        className="btn btn-danger"
                        onClick={e => this.deletar(produto)}>
                        Excluir
                    </button>

                </td>
            </tr>
        )
    })

    return (
        <Card title="Consulta Produtos">
            <div className="row">
                <div className="col-md-6">
                    <div className="bs-component">
                        <FormGroup htmlFor="inputCodBarras" label="Código de Barras: ">
                            <input type="text"
                                className="form-control"
                                id="inputCodBarras"
                                name="codBarras"
                                value={this.state.codBarras}
                                onChange={e => this.setState({ codBarras: e.target.value })}
                                placeholder="Digite o Código de Barras " />
                        </FormGroup>
                        <FormGroup htmlFor="inputNome" label="Nome: ">
                            <input type="text"
                                className="form-control"
                                id="inputNome"
                                name="nome"
                                value={this.state.nome}
                                onChange={e => this.setState({ nome: e.target.value })}
                                placeholder="Digite o Nome do produto" />
                        </FormGroup>
                        <FormGroup htmlFor="inputDescricao" label="Descrição: ">
                            <input type="text"
                                className="form-control"
                                id="inputDescricao"
                                name="descricao"
                                value={this.state.descricao}
                                onChange={e => this.setState({ descricao: e.target.value })}
                                placeholder="Digite uma breve descrição do produto" />
                        </FormGroup>
                        <FormGroup htmlFor="inputQuantidade" label="Quantidade: ">
                            <input type="text"
                                className="form-control"
                                id="inputQuantidade"
                                name="quantidade"
                                placeholder="Digite a Quantidade de produtos: " />
                        </FormGroup>
                        <FormGroup htmlFor="inputCategoria" label="Categoria: ">
                            <input type="text"
                                className="form-control"
                                id="inputCategoria"
                                name="categoria"
                                value={this.state.categoria}
                                onChange={e => this.setState({ categoria: e.target.value })}
                                placeholder="ID da Categoria: " />
                        </FormGroup>
                        <button type="button"
                            className="btn btn-success"
                            onClick={this.buscar}> 
                                Buscar 
                            </button>
                        <button type="button"
                            className="btn btn-danger"
                            onClick={this.prepararFormularioCadastro}>
                                Cadastrar 
                            </button>
                    </div>
                </div>
            </div>
            < br />
            <div className="row">
                <div className="col-md-12">
                    <div className="bs-componet">
                        <table className="table table-hover">
                            <thead>
                                <tr >
                                    <th scope="col"> Código de Barras </th>
                                    <th scope="col"> Nome </th>
                                    <th scope="col"> Descrição </th>
                                    <th scope="col"> Quantidade </th>
                                    <th scope="col"> Categoria </th>
                                    <th scope="col"> Ações </th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Card>
    )
}

}
export default withRouter(ConsultaProdutos);