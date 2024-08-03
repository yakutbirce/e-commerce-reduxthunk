import { useSelector } from "react-redux";
import Card from "../components/Card";
const MainPage = () => {
    //subscribing the store
    const state = useSelector((store) => store.productReducer);
    return (
        <div>
            {/*while loading */}
            {state.isLoading ? (
                  //runs when loading is finished and there is no error
                <h4 className="text-center mt-">Yükleniyor...</h4>
            ) : (
              
                !state.isError && (  
                <div className="d-flex flex-wrap justify-content-center justify-content-md-between gap-5 p-5 ">
                    {state.products.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
                )     
            )}
            {/*in case of error*/}
            {state.isError && (
               <div className="text-center mt-5">
                 <h2>Üzgünüz bir hata oluştu</h2>
               </div>
            )}
        </div>
    );
}

export default MainPage;