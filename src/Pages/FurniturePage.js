import React from "react";
import { useFetch } from "../Hooks/useFetch";
import { SkeletonLoading } from "../Components/SkeletonLoading/SkeletonLoading";
import { Card } from "../Components/Cards/card";
import { NotFoundPage } from "./NotFoundPage";
import { Modal } from "../Components/Modal/Modal";
import { CardDetail } from "../Components/CardDetail/CardDetail";
import { Context } from "../Context/context";

const idCategory=3;
const API = `https://api.escuelajs.co/api/v1/categories/${idCategory}/products`

function FurniturePage(){

    
    const { data, loading, error,openModal,setOpenModal } = useFetch(API);
    const { productDetails, setProductDetails } = React.useContext(Context)



    return(
        <>

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
export{FurniturePage}