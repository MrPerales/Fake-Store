import React from "react";
import './shoppingCar.css';
import { BsFillCartXFill } from 'react-icons/bs'
import { useCart } from "../../Hooks/useCart";

function ProductCart({ product, removeFromCart }) {
    return (
        <>
            <div className="productCart">

                {console.log(product.title, 'title')}

                <img
                    src={product.images[1]}
                    alt={product.title}
                    className="productoCart"
                />
                <p>{product.title}</p>
                <p>$ {product.price}</p>

                <button className="removedIcon" onClick={() => { removeFromCart(product) }}>
                    <BsFillCartXFill />
                </button>
            </div>
        </>
    );
}

function ShoppingCar({ setOpenCar }) {

    const { removeFromCart, cart } = useCart();
    // const { productDetails, setProductDetails } = React.useContext(Context)

    const closeCar = () => {
        setOpenCar(false);
    }
    console.log(cart, 'cart');
    // console.log(cart[0].id, 'id');
    return (
        <>
            <aside className="product-datail-car">
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

                            <ul>

                                {cart.map(item => (
                                    <ProductCart
                                        product={item}
                                        removeFromCart={removeFromCart}
                                    />
                                ))}

                            </ul>


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

export { ShoppingCar }