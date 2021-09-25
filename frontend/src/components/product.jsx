import React from "react";
import './product.css';

function Product(props) {
    return (
        <div className="product-div">
            <ul className="product-ul">
                <li><img className="product-img" src={props.itemImgURL} alt="product"/></li>
                <li><p>{props.itemName}</p></li>
                <li className="price"><h1>{"$" + props.itemPrice}</h1></li>
                <button className="buy-btn btn btn-primary btn-sm">Add To Cart</button>
            </ul>
        </div>
    );
}

export default Product;