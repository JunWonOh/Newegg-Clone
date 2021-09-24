import React from "react";
import './product.css';

function Product(props) {
    return (
        <div className="product-div" style={{width: "20%", height: "400px"}}>
            <ul className="product-ul">
                <li><img className="product-img center" src={props.itemImgURL} /></li>
                <li>{props.itemName}</li>
                <li>{props.itemPrice}</li>
                <button>Add To Cart</button>
            </ul>
        </div>
    );
}

export default Product;