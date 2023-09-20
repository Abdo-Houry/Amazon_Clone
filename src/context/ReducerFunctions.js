export const getBasketTotal = (basket) =>{
  return basket.reduce((anmount, item)=>{
    return anmount + item.price;
  } ,0)
}
export const initialState = {
    basket : [],
};
const ReducerFunctions = (state = initialState, action) => {
  switch(action.type){
    case "ADD_TO_BASKET" : return {
        ...state,
        basket: [...state.basket,action.item],
    }
    case "EMPTY_BASKET" : return{
      ...state,
      basket : [],
    }
    case "REMOVE_FORM_BASSKET" :
    const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
    let newBasket = [...state.basket];
    if(index >= 0){
      newBasket.splice(index,1);
    }else{
      console.warn(`can't remove product ${action.id} `);
    }
    return {
      ...state,
      basket: newBasket
    }
    default : return state
  }
}

export default ReducerFunctions
