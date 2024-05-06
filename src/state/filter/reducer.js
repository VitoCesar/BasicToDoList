import * as filterTypes from './types'

function reducer(_, action) {
  //testar tipo de cada action 
  //o que cada action vai fazer com o estado
  switch (action.type){
    case filterTypes.TOGGLE_FILTER:
      return action.payload.filter
    default:
      throw new Error()
  }
}

export default reducer