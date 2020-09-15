import ApiService from '../apiservice'

class CategoriaService extends ApiService{
    
    constructor(){
        super('/api/categorias')
    }

    salvar(categoria){
        return this.post('/', categoria)
    }

    atualizar(categoria){
        return this.put(`/${categoria.id}`, categoria)
    }

    consultar(categoriaFiltro){
        let params = `/api/categorias?nome=${categoriaFiltro.nome}`
        return this.get(params);
    }

    deletar(id){
        return this.delete(`/${id}`)
    }

    obterPorId(id){
        return this.get(`/${id}`)
    }

}
 
export default CategoriaService;