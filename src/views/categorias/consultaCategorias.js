import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import CategoriaService from '../../app/service/categoriaService'
import * as messages from '../../components/toastr'

class ConsultaProdutos extends React.Component {

    constructor() {
        super();
        this.categoriaService = new CategoriaService();
    }

    state = {
        nome: '',
        categorias: []
    }

    buscar = () => {

        const categoriaFiltro = {
            nome: this.state.nome
        }

        this.categoriaService
            .consultar(categoriaFiltro)
            .then(resposta => {
                const lista = resposta.data;
                
                if(lista.length < 1){
                    messages.mensagemAlerta("Nenhum resultado encontrado.");
                }
                this.setState({ categorias: lista })
            }).catch(error => {
                console.log(error)
            })
    }

    editar = (id) => {
        this.props.history.push(`/cadastroCategoria/${id}`)
    }

    deletar = ( categoria ) => {
        this.categoriaService
        .deletar( categoria )
        .then( response => {
            const categorias = this.state.categorias;
            //Erro ao usar index para remover item instantaneamente
            const index = categorias.indexOf(categoria);
            categorias.splice(index, 1);
            this.setState({categorias: categorias})
            messages.mensagemSucesso('Categoria deletada com sucesso!')
        }).catch(error => {
            messages.mensagemErro('Erro ao tentar remover Categoria!')
        })
    }

    prepararFormularioCadastro = () => {
        this.props.history.push('/cadastroCategoria')
    }

    render() {

        const rows = this.state.categorias.map(categoria => {
            return (
                <tr key={categoria.id}>
                    <td> {categoria.nome} </td>
                    <td>
                        <button type="button" title="Editar"
                            className="btn btn-primary"
                            onClick={e => this.editar(categoria.id)}>
                            Editar
                        </button>
                        <button type="button" title="Excluir"
                            className="btn btn-danger"
                            onClick={e => this.deletar(categoria.id)}>
                            Excluir
                        </button>
                    </td>
                </tr>
            )
        })

        return (
            <Card title="Consulta Categorias">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">
                            <FormGroup htmlFor="inputNome" label="Nome: ">
                                <input type="text"
                                    className="form-control"
                                    id="inputNome"
                                    name="nome"
                                    value={this.state.nome}
                                    onChange={e => this.setState({ nome: e.target.value })}
                                    placeholder="Digite o Nome da categoria" />
                            </FormGroup>
                            <button onClick={this.buscar}
                                type="button"
                                className="btn btn-success">
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
                    <div className="col-md-8">
                        <div className="bs-component">
                            <table className="table table-hover">
                                <thead>
                                    <tr >
                                        <th scope="col"> Nome </th>
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