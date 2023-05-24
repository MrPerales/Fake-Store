import React from "react";
import { Card } from "../Components/Cards/card";
import { useFetch } from "../useFetch";
import { SkeletonLoading } from "../Components/SkeletonLoading/SkeletonLoading";
import { NotFoundPage } from "./NotFoundPage";
import { CardDetail } from "../Components/CardDetail/CardDetail";
import { Modal } from "../Components/Modal/Modal";
import { Context } from "../context";

const API = 'https://api.escuelajs.co/api/v1/products';

function HomePage() {

    const { data, loading, error, setOpenModal, openModal } = useFetch(API);
    
    const { productDetails, setProductDetails } = React.useContext(Context)


    return (
        <>
            {console.log(data)}
            <section className="main-container">
                <div className="cards-container">
                    {loading && <SkeletonLoading />}
                    {error && <NotFoundPage />}
                    {data?.map((item) => (
                        <Card
                            setOpenModal={setOpenModal}
                            openModal={openModal}
                            setProductDetails={setProductDetails}
                            productDetails={productDetails}
                            key={item.id}
                            item={item}
                        />
                    ))}

                </div>
            </section>

            {/* Modal render */}

            {openModal && (
                <Modal>
                    <CardDetail
                        setOpenModal={setOpenModal}
                        setProductDetails={setProductDetails}
                        productDetails={productDetails}
                    />
                </Modal>
            )}

        </>
    )
}
export { HomePage }