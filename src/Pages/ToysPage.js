import React from "react";
import { Context } from "../Context/context";

function ToysPage(){
    const { productDetails, setProductDetails } = React.useContext(Context)

    return(
        <p>ToysPage</p>
    )
}
export{ToysPage}