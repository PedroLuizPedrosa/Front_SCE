import ApiService from '../apiservice'

class ProdutoService extends ApiService{
    constructor(){
        super('/api/produtos')
    }

    /*salvar(usuario){
        return this.post('/', produto)
    }*/

    atualizar(produto){
        return this.put(`/${produto.id}`, produto)
    }

    deletar(id){
        return this.delete(`/${id}`)
    }

    obterPorId(id){
        return this.get(`/${id}`)
    }

    consultar(produtoFiltro){
        let params = `/api/produtos?nome=${produtoFiltro.nome}`
        
        if(produtoFiltro.codBarras){
            params = `${params}&codBarras=${produtoFiltro.codBarras}`
        }
        if(produtoFiltro.descricao){
            params = `${params}&descricao=${produtoFiltro.descricao}`
        }
        if(produtoFiltro.quantidade){
            params = `${params}&quantidade=${produtoFiltro.quantidade}`
        }
        if(produtoFiltro.categoria){
            params = `${params}&categoria=${produtoFiltro.categoria}`
        }            
        
        return this.get(params);
    }
}
 
export default ProdutoService;