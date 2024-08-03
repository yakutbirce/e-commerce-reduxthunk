import axios from "axios";
 
//async action (thunk)
export const getProducts = () => (dispatch) =>{
   
        axios
        .get('https://fakestoreapi.com/products')
        .then((res)=>
          //transfering data from the API to the reducer
        dispatch({
          type: 'SET_PRODUCTS',
          payload: res.data,
        })
        )
        .catch((err)=> 
          //sending the error to the reducer in case of an error
        dispatch({
          type: 'SET_ERROR',
          payload: err,
        })
      );
     
}