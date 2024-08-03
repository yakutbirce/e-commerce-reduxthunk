import { useSelector } from "react-redux";
import BasketItem from '../components/BasketItem'; 

const Basket = () => {
    const state = useSelector((store) => store.basketReducer);

    return (
        <div className="row p-2">
            {state.basket.length === 0 && (
                <h3 className="text-center mt-5">Önce sepete bir ürün ekleyiniz.</h3>
            )}

            {/*If there are items in the basket*/}
            {state.basket.length > 0 && (
                <>
                    <div className="col-md-9">
                        {state.basket.map((item, index) => (
                            <BasketItem key={item.id || index} item={item} />
                        ))}
                    </div>

                    <div className="col-md-3 mt-5">
                        <h5>Toplam: ${state.total.toFixed(2)}</h5>
                        <button 
                            onClick={() =>
                                alert('Ödeme tamamlandı, fiyat $' + state.total.toFixed(2))
                            }
                            className="btn btn-success mt-3">
                            Alışverişi Tamamla
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Basket;
