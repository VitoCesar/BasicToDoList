import * as filterTypes from './types'

//função retorna objeto para input
export function toggleFilter(filter){
  return {
    //filtro novo para filtro atual
    type: filterTypes.TOGGLE_FILTER,
    payload: {
      //para chave e valor igual 
      filter: filter
    }
  }
}