import axios from "axios";
import React from "react";
import './product.css';
import './cart.css';

export default class CartItem extends React.Component {
    removeItem(e) {
        e.preventDefault();
        axios.post("/cart/remove", {
            productId: this.props.itemID,
            withCredentials: true
        })
            .then(response => {
                if (response.data) {
                    if (response.data === "not authorized") {
                        window.location.href = '/cart'
                    } else {
                        console.log(response.data)
                        window.location.href = '/cart'
                    }
                } else {
                    console.log("Login error: incorrect info");
                }
            })
            .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
    }
    render() {
        return (
            <div>
                <div className="cart-item">
                    <div className="flex-container">
                        <div className="cart-image"><img className="cart-product-img" src={this.props.itemImgURL} alt="cart-item.png" /></div>
                        <ul>
                            <li className="cart-header" style={{textAlign: "left"}}>{this.props.itemName}</li>
                            <li className="cart-price" style={{textAlign: "left"}}>{"$" + this.props.itemPrice}</li>
                            <li><button className="buy-btn btn ms-auto" onClick={ (e) => this.removeItem(e) } style={{marginRight: "20px"}}>Remove</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}