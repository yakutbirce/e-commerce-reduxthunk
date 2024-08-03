//default values
const initialState = {
    basket: [],
    total: 0,
};

//determines how the state changes
export const basketReducer = (state=initialState, action) =>{
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // Check if this item is already in the basket
const index =  state.basket.findIndex((i)=> i.id === action.payload.id
);

if(index >=0) {
    //If this item is already in the basket
    const clone = [...state.basket];

   
    // Increase the quantity of the item by 1
    clone[index].amount ++;
    //update store
    return {basket :clone, total: state.total + action.payload.price };
} else{
          //add new product to basket
          const newBasket = state.basket.concat({
            ...action.payload, 
            amount:1,
        });
        //update the store
        return {
            basket: newBasket,
            total: state.total + action.payload.price,
        };

}
      
        case 'REMOVE_ITEM':
            const found = state.basket.findIndex(
                (i) => i.id === action.payload.id
            )
            //if the item exists and the quantity is greater than 1
            if ( found >= 0 && action.payload.amount >1){
                //decrease the quantity by 1
                const clone = [...state.basket];
                const item = clone[found];
                
              
                clone[found].amount --;

          return {
            basket: clone,
            total: state.total - item.price,
          }
            } else {
                //remove from basket
                const newBasket = state.basket.filter((i) =>i.id !== action.payload.id )
                return{
                    basket: newBasket,
                    total: state.total - action.payload.price,
                }
            }
            return state;

        default:
            return state;
    }
}

export default basketReducer;