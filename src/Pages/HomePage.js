import React from "react";
import { Card } from "../Components/Cards/card";
import { useFetch } from "../useFetch";
import { SkeletonLoading } from "../Components/SkeletonLoading/SkeletonLoading";
const API = 'https://api.escuelajs.co/api/v1/products';

function HomePage() {

    const { data, loading } = useFetch(API);


    return (
        <>
            {/* {console.log(data)} */}
            <section className="main-container">
                <div className="cards-container">
                    {loading && <SkeletonLoading />}

                    {data?.map((item) => (

                        // <p>{item.id}</p>
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