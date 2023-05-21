import React from "react";
import './order.css'


function Order() {
    return (
        <>
            <div className="my-order">
                <div className="my-order-container">
                    <h1 className="title">My orders</h1>

                    <div className="my-order-content">
                        <div className="articulos">
                            <div className="description">
                                <p className="fecha">04.25.2021</p>
                                <p className="cantidad">6 articles</p>
                            </div>
                            <div className="total-a-pagar">
                                <p>$ 560.00</p>
                            </div>
                        </div>

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




                    </div>


                </div>
            </div>

        </>
    );
}

export { Order }