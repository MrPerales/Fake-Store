import React from "react";
import './card.css'

function Card({item}) {

    const openModal=()=>{
        console.log('click');
    }
    const urlImage='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'
    const img= item.images[1] || urlImage;

    return (
        <>
            <div className="product-card">
                <img
                    onClick={openModal}
                    src={img}
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