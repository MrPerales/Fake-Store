import React from "react";
import './card.css'
function Card({item}) {
    return (
        <>
            <div className="product-card">
                <img
                    src={item.images[1]}
                    alt="producto" className="producto-img"
                />
                <div className="div-especificaciones">
                    <div className="especificaciones">
                        <p className="precio">{item.price}</p>
                        <p className="product-name">{item.title}</p>
                    </div>
                    <figure className="icon-container">
                        <img
                            src="https://icons.veryicon.com/png/o/transport/vehicle-management-icon-library/add-vehicles.png"
                            alt="icon-add-car"
                        />
                    </figure>
                </div>
            </div>

        </>
    );
}

export {Card};