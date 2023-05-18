import React from "react";
import './cardDetail.css'

function CardDetail({ setOpenModal,productDetails}) {
    
    const closeModal = () => {
        setOpenModal(false);
    }
    const details=productDetails
    console.log(productDetails);
    
    return (
        <>
            <aside className="product-datail">
                <img
                    src="https://www.freeiconspng.com/thumbs/close-icon/close-icon-15.png"
                    alt="icon"
                    className="icon-close"
                    onClick={closeModal}
                />
                <img
                    src={details.images[1]}
                    alt="producto"
                    className="producto-img"
                />
                <div className="product-info">
                    <p>$ {details.price}</p>
                    <p>{details.title}</p>
                    <p>{details.description}</p>

                    <button className="primary-button add-to-car-button">
                        <img
                            src="https://icons.veryicon.com/png/o/transport/vehicle-management-icon-library/add-vehicles.png"
                            alt="icon-add-car"
                            className="icon-car"
                        />
                        Add to cart
                    </button>
                </div>
            </aside>
        </>
    );
}

export { CardDetail }