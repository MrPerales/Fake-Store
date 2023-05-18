import React from "react";
import { useFetch } from "../useFetch";
import { SkeletonLoading } from "../Components/SkeletonLoading/SkeletonLoading";
import { Card } from "../Components/Cards/card";
import { NotFoundPage } from "./NotFoundPage";
const idCategory = 1
const API = `https://api.escuelajs.co/api/v1/categories/${idCategory}/products`
function ClothesPage() {

    const { data, loading, error,openModal,setOpenModal } = useFetch(API);

    console.log(data);

    return (
        <>

            <section className="main-container">
                <div className="cards-container">
                    {loading && <SkeletonLoading />}
                    {error && <NotFoundPage />}
                    {data?.map((item) => (
                        <Card
                        setOpenModal={setOpenModal}
                            openModal={openModal}
                            key={item.id}
                            item={item}
                        />
                    ))}

                </div>
            </section>
        </>
    )
}
export { ClothesPage }