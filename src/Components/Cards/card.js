import React from "react";
import './card.css'

function Card({ item, openModal, setOpenModal, setProductDetails }) {

    const onClickDetail = () => {
        // console.log(item);
        // se setea productoDetail con la informacion del product
        setProductDetails(item);
        if (openModal) {
            console.log('if');
            setOpenModal(false);
        } else {
            console.log('else');
            setOpenModal(true);
        }

    }
    const urlImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'
    const img = item.images[1] || urlImage;



    return (
        <>
            <div className="product-card">
                <img
                    onClick={onClickDetail}
                    src={img}
                    alt="producto" className="producto-img"
                />
                <div className="div-especificaciones">
                    <div className="especificaciones">
                        <p className="precio">{item.price}</p>
                        <p className="product-name">{item.title}</p>
                    </div>
                  
                </div>
            </div>

        </>
    );
}

export { Card };