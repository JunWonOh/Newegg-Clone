import axios from "axios";
import React from "react";
import './product.css'

export default class CartItem extends React.Component {
    removeItem() {

    }
    render() {
        return (
            <div>
                <div className="flex-container">
                    <div><img className="product-img" src={this.props.imgURL} alt="cart-item.png" /></div>
                    <div>
                        <ul className="product-ul">
                            <li>{this.props.name}</li>
                            <li className="price">{this.props.price}</li>
                            <li><button className="buy-btn">Remove</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}