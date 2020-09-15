import React from 'react'
import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import { withRouter } from 'react-router-dom'
import CategoriaService from '../../app/service/categoriaService'
import { mensagemSucesso, mensagemErro } from '../../components/toastr'

class CadastroCategoria extends React.Component {

    state = {
        id: null,
        nome: ''
    }

    constructor(){
        super();
        this.categoriaService = new CategoriaService();
    }

    componentDidMount(){
        const params = this.props.match.params
        if (params.id){
            this.categoriaService
            .obterPorId(params.id).then(response => {
                this.setState( { ...response.data } )
            }).catch(error => {
                mensagemErro(error.response.data)
            })
        }
    }

    cadastrar = () => {
        const categoria = {
            nome: this.state.nome
        }
        this.categoriaService.salvar(categoria)
            .then( response => {
                mensagemSucesso('Categoria cadastrada com sucesso!')
                this.props.history.push('/consultaCategorias')
        }).catch(error => {
            mensagemErro(error.response.data)
        })
    }

    atualizar =() => {
        const categoria = {
            nome: this.state.nome,
            id: this.state.id
        }
    
        this.categoriaService.atualizar(categoria)
            .then( response => {
                this.props.history.push('/consultaCategorias')
                mensagemSucesso('Categoria atualizada com sucesso!')
        }).catch(error => {
            mensagemErro(error.response.data)
        })
    }

    cancelar = () => {
        this.props.history.push('/consultaCategorias')
    }

    render() {
        return (
            <Card title="Cadastro de Categorias">
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
                            <button type="button" className="btn btn-success"
                                onClick={this.cadastrar}> Salvar 
                            </button>
                            <button type="button" className="btn btn-primary"
                                onClick={this.atualizar}> Atualizar 
                            </button>
                            <button type="button" className="btn btn-danger"
                                onClick={this.cancelar}> Cancelar 
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter (CadastroCategoria)