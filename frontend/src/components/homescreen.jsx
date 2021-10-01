import React, { Component } from "react";
import SideCategories from "./categories-dropend";
import axios from 'axios';
import Product from './product'

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3001/')
            .then(response => {
                this.setState({products: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    ListOfProducts() {
        return this.state.products.map(currentproduct => {
            var currentName = currentproduct.name;
            if (currentName.length > 100) 
                currentName = currentName.slice(0,100) + '...';
            console.log(currentproduct._id)
            return <Product key={currentproduct._id} itemID={currentproduct._id} itemImgURL={currentproduct.image} itemName={currentName} itemPrice={currentproduct.price}/>;
        })
    }

    render(){
        return (
            <div>
                <section id="first-section">
                    <div className="flex-container">
                        <div className="edge-border"></div>
                        <SideCategories />
                        <div className="item" style={{width: "72.5%"}}>
                            <div id="home-carousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active cropped">
                                        <img src="/images/carousel-item/carousel-item (1).jpg" alt="..." />
                                    </div>
                                    <div className="carousel-item cropped">
                                        <img src="/images/carousel-item/carousel-item (2).jpg" alt="..." />
                                    </div>
                                    <div className="carousel-item cropped">
                                        <img src="/images/carousel-item/carousel-item (3).jpg" alt="..." />
                                    </div>
                                    <div className="carousel-item cropped">
                                        <img src="/images/carousel-item/carousel-item (4).jpg" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#home-carousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#home-carousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="flex-container" style={{width: "100%"}}>
                                <div className="promo-item" style={{width: "66%"}}>
                                    <img src="/images/homepage/homepage (2).jpg" alt="" style={{width: "100%"}} />
                                </div>
                                <a  href="https://www.dxracer.com/" style={{width: "33%", marginLeft: "14px"}}>
                                    <div className="promo-item">
                                        <img src="/images/homepage/homepage (1).jpg" alt="" style={{width: "100%"}} />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="edge-border">
                        </div>
                    </div>
                </section>
                <section id="categories">
                    <div className="flex-container">
                        <div className="category-products flex-container align-horizontally">
                            <a className="hide-underline" href="/p/CPU">
                                <div className="item">
                                    <div className="circle"><img src="/images/homepage/categories/cpu.png" alt="CPU" /></div>
                                    <p className="category-name">Processors</p>
                                </div>
                            </a>
                            <a className="hide-underline" href="/p/GPU">
                                <div className="item">
                                    <div className="circle"><img src="/images/homepage/categories/gpu.png" alt="GPU" /></div>
                                    <p className="category-name">Graphics Card</p>
                                </div>
                            </a>
                            <a className="hide-underline" href="/p/RAM">
                                <div className="item">
                                    <div className="circle"><img src="/images/homepage/categories/ram.png" alt="RAM" /></div>
                                    <p className="category-name">Memory</p>
                                </div>
                            </a>
                            <a className="hide-underline" href="/p/Motherboard">
                                <div className="item">
                                    <div className="circle"><img src="/images/homepage/categories/motherboard.png" alt="MOBO" /></div>
                                    <p className="category-name">Motherboard</p>
                                </div>
                            </a>
                            <a className="hide-underline" href="/p/Case">
                                <div className="item">
                                    <div className="circle"><img src="/images/homepage/categories/case.png" alt="CASE" /></div>
                                    <p className="category-name">Cases</p>
                                </div>
                            </a>
                            <a className="hide-underline" href="/p/PSU">
                                <div className="item">
                                    <div className="circle"><img src="/images/homepage/categories/psu.png" alt="PSU" /></div>
                                    <p className="category-name">Power Supplies</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <section id="popular-items">
                    <div className="flex-container">
                        <div className="edge-border"></div>
                        <div className="product-grid-div">
                            <h1 className="category-header">TRENDING NOW</h1>
                            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                                { this.ListOfProducts() }
                            </div>
                        </div>
                        <div className="edge-border"></div>
                    </div>

                    <script src="../../frontend/src/test.jsx" type="text/jsx"></script>
                </section>
            </div>
        );
    }
}