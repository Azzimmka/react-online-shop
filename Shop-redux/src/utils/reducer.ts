import  { type Action, type State,} from './types'
 
export const intialState: State = {
    products: [],
    cart: [],
    likes: [],
    loading: true
}

export function reducer(state: State, action: Action){
    switch (action.type) {
        // We will use this case in our App.tsx for storing data(products) from db.json
        case "SET_PRODUCTS":
          return {...state, products: action.payload, loading: false};
      default:
        return state;
    }           
}