import React from 'react';
import axios from 'axios';
import CartItem  from './cart-item';

const DecodeProduct = async (id) => {
    try {
        let res = await axios.get('http://localhost:3001/getProduct/' + id);
        return res.data.results;
    } catch(error) {
        return null;
    }
}

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3001/userInfo', {
            withCredentials: true
        })
            .then(response => {
                console.log(response.data[0].cartItems);
                this.setState({products: response.data[0].cartItems})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DecodeProduct(id) {
        const {data: response} = axios.get('http://localhost:3001/getProduct/' + id).then(response => response.data)
        return response;
    }

    ListOfProducts() {
        return this.state.products.map(item => {
            console.log('item: ' + item.productId);
            DecodeProduct(item.productId);
            var currentproduct = '';
            console.log('product: ' +  currentproduct);
            // console.log(JSON.stringify(currentproduct))
            // var currentName = currentproduct.name;
            // if (currentName.length > 100) 
            //     currentName = currentName.slice(0,100) + '...';
            // return <CartItem key={currentproduct._id} itemID={currentproduct._id} itemImgURL={currentproduct.image} itemName={currentName} itemPrice={currentproduct.price}/>;
        })
    }
    render() {
        return (
            <div id="first-section">
                <p style={{color: "white"}}>{JSON.stringify(this.state.products)}</p>
                { this.ListOfProducts() }
            </div>
        )
    }
}