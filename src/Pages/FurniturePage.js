import React from "react";
import { useFetch } from "../useFetch";
import { SkeletonLoading } from "../Components/SkeletonLoading/SkeletonLoading";
import { Card } from "../Components/Cards/card";
import { NotFoundPage } from "./NotFoundPage";
const idCategory=3;
const API = `https://api.escuelajs.co/api/v1/categories/${idCategory}/products`

function FurniturePage(){
    const { data, loading, error } = useFetch(API);
    return(
        <>

            <section className="main-container">
                <div className="cards-container">
                    {loading && <SkeletonLoading />}
                    {error && <NotFoundPage />}
                    {data?.map((item) => (
                        <Card
                            key={item.id}
                            item={item}
                        />
                    ))}

                </div>
            </section>
        </>
    )
}
export{FurniturePage}