import React from "react";
import './shoppingCar.css';


function ShoppingCar({setOpenCar}) {

    const closeCar=()=>{
        setOpenCar(false);
    }

    return (
        <>
            <aside className="product-datail">
                <div className="my-order-container">
                    <div className="icon-title">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3485/3485764.png"
                            alt="icon"
                            className="flechita"
                            onClick={closeCar}
                        />
                        <h1 className="title">My order</h1>
                    </div>

                    <div className="my-order-content">

                        <div className="shopping-card">
                            <figure className="icon-container">
                                <img
                                    src="https://i.seadn.io/gae/uAJta1YRdB-fhq0Z1ZKB6SuOirVng9PyExwdEZu2Rl7uxDN_YLqgKI-L3egZZ0kWevHSsKVWd3MwOlLdtiDuVnknjcYoyBXTFCUQ?auto=format&w=1000"
                                    alt="producto"
                                    className="producto-img"
                                />
                            </figure>
                            <p>$120.00</p>
                        </div>
                        <div className="articulos">
                            <div className="description">
                                <p>Total</p>
                            </div>
                            <div className="total-a-pagar">
                                <p>$ 560.00</p>
                            </div>
                        </div>

                        <button className="primary-button">
                            Checkout
                        </button>

                    </div>

                </div>


            </aside>

        </>
    );
}

export {ShoppingCar}