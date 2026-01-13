import  { type Action, type State,} from './types'
 
export const initialState: State = {
    products: [],
    cart: [],
    likedIds: [],
    loading: true
}

export function reducer(state: State, action: Action){
    switch (action.type) {
        // We will use this case in our App.tsx for storing data(products) from db.json
        case "SET_PRODUCTS":
          return {...state, products: action.payload, loading: false};
        case "TOGGLE_LIKE": {
            const id = action.payload.productId;
            const liked = state.likedIds.includes(id);
            return {
              ...state,
              likedIds: liked
                ? state.likedIds.filter(x => x !== id)
                : [...state.likedIds, id],
      };
    }

      default:
        return state;
    }           
}