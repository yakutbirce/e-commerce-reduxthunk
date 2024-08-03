import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./pages/Basket";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { getProducts } from "./redux/actions/productActions";

function App() {

  const dispatch=useDispatch();

  useEffect(()=>{
    //dispatching an asynchronous thunk action
    dispatch(getProducts());
  }, []);
  
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path = "/" element= {<MainPage/>} />
    <Route path = "/basket" element= {<Basket/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
