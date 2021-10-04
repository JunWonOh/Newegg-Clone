import React from "react";
import axios from 'axios';

export default class AddProducts extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangePlatform = this.onChangePlatform.bind(this);

        this.state = {
            name: '',
            price: 0,
            image: '',
            type: '',
            brand: '',
            platform: ''
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        axios.post("/upload-product", {
            name: this.state.name,
            price: this.state.price,
            image: this.state.image,
            type: this.state.type,
            brand: this.state.brand,
            platform: this.state.platform,
            withCredentials: true})
            .then(response => console.log(response.data));
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }
    onChangeImage(e) {
        this.setState({
            image: e.target.value
        })
    }
    onChangeType(e) {
        this.setState({
            type: e.target.value
        })
    }
    onChangeBrand(e) {
        this.setState({
            brand: e.target.value
        })
    }
    onChangePlatform(e) {
        this.setState({
            platform: e.target.value
        })
    }
    render() {
        return (
            <div>
                <section id="login-area">
                        <div className="main-div row">
                            <div className="main-login col-sm-4">
                                <h1>ADD A PRODUCT</h1>
                                <form action="/add-products" method="POST">
                                    <div className="form-group">
                                        <label>Item Name</label>
                                        <input type="text" value={ this.state.name } onChange={ this.onChangeName } className="form-control" aria-describedby="emailHelp" placeholder="Item Name"/>
                                        <small id="emailHelp" name="password" className="form-text text-muted">(i.e. MSI RTX 2080 Ti 12G OC)</small>
                                    </div>
                                    <div className="form-group">
                                        <label>Item Price</label>
                                        <input type="number" value={ this.state.price } onChange={ this.onChangePrice } className="form-control" aria-describedby="emailHelp" placeholder="Item Price"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Item Image</label>
                                        <input type="text" value={ this.state.image } onChange={ this.onChangeImage } className="form-control" aria-describedby="emailHelp" placeholder="Item Image URL"/>
                                        <small id="emailHelp" name="password" className="form-text text-muted">(URLs only please!)</small>
                                    </div>
                                    <div className="form-group">
                                        <label>Item Type</label>
                                        <input type="text" value={ this.state.type } onChange={ this.onChangeType } className="form-control" aria-describedby="emailHelp" placeholder="Item Type"/>
                                        <small id="emailHelp" name="password" className="form-text text-muted">(CPU | GPU | RAM | Motherboard | Case | PSU)</small>
                                    </div>
                                    <div className="form-group">
                                        <label>Item Brand</label>
                                        <input type="text" value={ this.state.brand } onChange={ this.onChangeBrand } className="form-control" aria-describedby="emailHelp" placeholder="Item Brand"/>
                                        <small id="emailHelp" name="password" className="form-text text-muted">(MSI | NVIDIA | AMD | Intel | GIGABYTE | ASUS | NZXT | Corsair | Montech | G.Skill)</small>
                                    </div>
                                    <div className="form-group">
                                        <label>Item Platform</label>
                                        <input type="text" value={ this.state.platform } onChange={ this.onChangePlatform } className="form-control" aria-describedby="emailHelp" placeholder="Item Platform"/>
                                        <small id="emailHelp" name="password" className="form-text text-muted">(AM4 | LGA 1151 | AMD | NVIDIA)</small>
                                    </div>
                                    <button type="submit" className="login-btn btn btn-primary" onClick={ (e) => this.handleSubmit(e) }>ADD</button>
                                </form>
                            </div>
                        </div>
                </section>
            </div>
        )
    }
}