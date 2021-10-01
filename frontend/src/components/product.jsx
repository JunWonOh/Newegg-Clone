import axios from "axios";
import React from "react";
import './product.css';


export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
    }

    addToCart(e) {
        e.preventDefault();
        axios.post("/cart/insert", {
            productId: this.props.itemID
        })
            .then(response => {
                if (response.data) {
                    if (response.data === "not authorized") {
                        window.location.href = '/login'
                    } else {
                        console.log(response.data)
                    }
                } else {
                    console.log("Login error: incorrect info");
                }
            })
            .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
    }
    
    

    render() {
        return (
            <div className="product-div">
                <ul className="product-ul">
                    <li><img className="product-img" src={this.props.itemImgURL} alt="product"/></li>
                    <li><p>{this.props.itemName}</p></li>
                    <li className="price"><h1>{"$" + this.props.itemPrice}</h1></li>
                    <button className="buy-btn btn btn-primary btn-sm" onClick={ (e) => this.addToCart(e) }>Add To Cart</button>
                </ul>
            </div>
        );
    }
}

