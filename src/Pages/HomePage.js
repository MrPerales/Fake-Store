import React from "react";
import { Card } from "../Components/Cards/card";
import { useFetch } from "../useFetch";
import { SkeletonLoading } from "../Components/SkeletonLoading/SkeletonLoading";
import { NotFoundPage } from "./NotFoundPage";

const API = 'https://api.escuelajs.co/api/v1/products';

function HomePage() {

    const { data, loading,error } = useFetch(API);


    return (
        <>
            {console.log(data)}
            <section className="main-container">
                <div className="cards-container">
                    {loading && <SkeletonLoading />}
                    {error&& <NotFoundPage/>}
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
export { HomePage }