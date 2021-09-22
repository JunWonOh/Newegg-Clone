import React from "react"

function Product(props) {
    return (
        <div style={{width: "20%", height: "400px"}}>
            <ul>
                <li><img src={props.itemImgURL} /></li>
                <li>{props.itemName}</li>
                <li>{props.itemPrice}</li>
                <button>Add To Cart</button>
            </ul>
        </div>
    );
}

export default Product;