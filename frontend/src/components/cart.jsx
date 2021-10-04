import React from 'react';
import axios from 'axios';
import CartItem  from './cart-item.jsx';
import './cart.css'

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productIds: [], 
            products: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/userInfo', {
            withCredentials: true
        })
            .then(response => {
                this.setState({productIds: response.data[0].cartItems})
                this.RetrieveProducts(response.data[0].cartItems);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    RetrieveProducts(id) {
        this.state.productIds.map(item => {
            console.log(id.productId);
            axios.get('http://localhost:3001/getProduct/' + item.productId).then((res) => 
                this.setState({
                    products: [...this.state.products, res.data]
                })
            )
        });

    }

    ListOfProducts() {
        return this.state.products.map((item, index) => {
            var currentName = item.name;
            if (currentName.length > 100) 
                currentName = currentName.slice(0,100) + '...';
            console.log('id: ' + item._id);
            console.log('name: ' + currentName);
            console.log('img: ' + item.image);
            return <CartItem key={index} itemID={item._id} itemImgURL={item.image} itemName={currentName} itemPrice={item.price.toFixed(2)} />;
        })
    }

    GetTotal() {
        var total = 0
        this.state.products.map(item => total += item.price);
        return total.toFixed(2);
    }

    render() {
        return (
            <div id="first-section">
                <div className="flex-container">
                    <div className="cart-items">
                        { this.ListOfProducts() }
                    </div>
                    <div className="cart-info ms-auto">
                        <h1 className="cart-header">Your Total:</h1>
                        <h1 className="cart-price">{ "$" + this.GetTotal() }</h1>
                        <button className="checkout-btn btn btn-lg">Checkout</button>
                    </div>
                </div>
            </div>
        );
    }
}