import React, { Component } from "react";
import axios from 'axios';
import Product from './product';

export default class Query extends Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3001/p/' + window.location.pathname.slice(3) + '/')
            .then(response => {
                this.setState({products: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
        // console.log(this.state.products);
    }

    ListValidProducts() {
        if (this.state.products.length === 0) {
            return ( <div><p>Sorry, no item matches what you were looking for.</p>
            <p>We've yet to add more items to the database so keep an eye out!</p></div> )
        } else {
            return this.state.products.map(currentproduct => {
                return <Product key={currentproduct._id} itemImgURL={currentproduct.image} itemName={currentproduct.name.slice(0,100) + '...'} itemPrice={currentproduct.price}/>;
            })
        }
    }

    render() {

        return (
            <div>
                <section id="first-section">
                    <div className="flex-container">
                    <div className="edge-border"></div>
                        <div className="product-grid-div" style={{marginTop: "30px"}}>
                            <h1 className="category-header">Showing results for "{decodeURI(window.location.pathname.slice(3))}"</h1>
                            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>{ this.ListValidProducts() }</div>
                        </div>
                    <div className="edge-border"></div>
                </div>
                </section>
            </div>
        );
    }
}