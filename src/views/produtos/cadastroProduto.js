import React from 'react'
import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import { withRouter } from 'react-router-dom'

class CadastroProduto extends React.Component {

    state = {
        codBarras: '',
        nome: '',
        descricao: '',
        quantidade: '',
        categoria: ''
    }

    cadastrar = () => {
        console.log(this.state)
    }

    cancelar =() => {
        this.props.history.push('/home')
    }

    render() {
        return (
            <Card title="Cadastro de Produtos">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs.component">
                            <FormGroup label="Nome: " htmlFor="inputNome">
                                <input type="text"
                                    id="inputNome"
                                    className="form-control"
                                    name="nome"
                                    onChange={e => this.setState({ nome: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Descrição: " htmlFor="inputDescricao">
                                <input type="text"
                                    id="inputDescricao"
                                    className="form-control"
                                    name="descricao"
                                    onChange={e => this.setState({ descricao: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Quantidade: " htmlFor="inputQuantidade">
                                <input type="text"
                                    id="inputQuantidade"
                                    className="form-control"
                                    name="quantidade"
                                    onChange={e => this.setState({ quantidade: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Codigo de Barras: " htmlFor="inputCodBarras">
                                <input type="text"
                                    id="inputCodBarras"
                                    className="form-control"
                                    name="codBarras"
                                    onChange={e => this.setState({ codBarras: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Categoria: " htmlFor="inputCategorias">
                                <input type="text"
                                    id="inputCategoria"
                                    className="form-control"
                                    name="categoria"
                                    onChange={e => this.setState({ categoria: e.target.value })} />
                            </FormGroup>
                            <button type="button" className="btn btn-success"
                                onClick={this.cadastrar}> Salvar </button>
                            <button type="button" className="btn btn-danger"
                                onClick={this.cancelar}> Cancelar </button>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}
export default withRouter (CadastroProduto)