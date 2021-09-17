import React from "react";
import SideCategories from "./categories-dropend"

function Home(){
    return (
        <div>
            <section id="first-section">
                <div class="flex-container">
                    <div class="edge-border"></div>
                    <SideCategories />
                    <div class="item" style={{width: "72.5%"}}>
                        <div id="home-carousel" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active cropped">
                                    <img src="/images/carousel-item/carousel-item (1).jpg" alt="..." />
                                </div>
                                <div class="carousel-item cropped">
                                    <img src="/images/carousel-item/carousel-item (2).jpg" alt="..." />
                                </div>
                                <div class="carousel-item cropped">
                                    <img src="/images/carousel-item/carousel-item (3).jpg" alt="..." />
                                </div>
                                <div class="carousel-item cropped">
                                    <img src="/images/carousel-item/carousel-item (4).jpg" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#home-carousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#home-carousel" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="flex-container" style={{width: "100%"}}>
                            <div class="promo-item" style={{width: "66%"}}>
                                <img src="/images/homepage/homepage (2).jpg" alt="" style={{width: "100%"}} />
                            </div>
                            <div class="promo-item" style={{width: "33%", marginLeft: "14px"}}>
                                <img src="/images/homepage/homepage (1).jpg" alt="" style={{width: "100%"}} />
                            </div>
                        </div>
                    </div>
                    <div class="edge-border">
                        
                    </div>
                </div>
                
            </section>
            <section id="categories">
                <div class="flex-container">
                    <div class="category-products flex-container align-horizontally">
                        <div class="item">
                            <div class="circle"><img src="/images/homepage/categories/cpu.png" alt="CPU" /></div>
                            <p class="category-name">Processors</p>
                        </div>
                        <div class="item">
                            <div class="circle"><img src="/images/homepage/categories/gpu.png" alt="GPU" /></div>
                            <p class="category-name">Graphics Card</p>
                        </div>
                        <div class="item">
                            <div class="circle"><img src="/images/homepage/categories/ram.png" alt="RAM" /></div>
                            <p class="category-name">Memory</p>
                        </div>
                        <div class="item">
                            <div class="circle"><img src="/images/homepage/categories/motherboard.png" alt="MOBO" /></div>
                            <p class="category-name">Motherboard</p>
                        </div>
                        <div class="item">
                            <div class="circle"><img src="/images/homepage/categories/case.png" alt="CASE" /></div>
                            <p class="category-name">Cases</p>
                        </div>
                        <div class="item">
                            <div class="circle"><img src="/images/homepage/categories/psu.png" alt="PSU" /></div>
                            <p class="category-name">Power Supplies</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="popular-items">
                <div class="flex-container">
                    <div class="edge-border"></div>
                    <div class="trending-div">
                        <h1>TRENDING NOW</h1>
                    </div>
                    <div class="edge-border"></div>
                </div>

                <script src="../../frontend/src/test.jsx" type="text/jsx"></script>
            </section>
        </div>
    );
}

export default Home;