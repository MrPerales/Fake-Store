import React from "react";
import './skeletonLoading.css'
function SkeletonLoading() {
    return (
        <>
            {arrayLoading.map(item =>

                <div className="skeleton-container">
                    <div className="skeleton-img"></div>
                    <div className="skeleton-detail"></div>
                </div>
            )}

        </>
    );
}
export { SkeletonLoading };

const arrayLoading = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];