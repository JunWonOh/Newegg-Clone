import React from "react";

function SideCategories() {
    return (
        <div id="item categories" style={{width: "10.5%"}}>
            <ul class="category-list">
                <li>
                    <div class="category btn-group dropend">
                        <button type="button" class="category-side-btn btn btn-primary-outline dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Processors
                        </button>
                        <ul class="ham-dropdown-menu dropdown-menu">
                            <a class="dropdown-item" href="#">Intel</a>
                            <a class="dropdown-item" href="#">AMD</a>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="category btn-group dropend">
                        <button type="button" class="category-side-btn btn btn-primary-outline dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Graphics Card
                        </button>
                        <ul class="ham-dropdown-menu dropdown-menu">
                            <a class="dropdown-item" href="#">NVIDIA</a>
                            <a class="dropdown-item" href="#">AMD</a>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="category btn-group dropend">
                        <button type="button" class="category-side-btn btn btn-primary-outline dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Memory
                        </button>
                        <ul class="ham-dropdown-menu dropdown-menu">
                            <a class="dropdown-item" href="#">Corsair</a>
                            <a class="dropdown-item" href="#">G. Skill</a>
                            <a class="dropdown-item" href="#">Crucial</a>
                            <a class="dropdown-item" href="#">Samsung</a>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="category btn-group dropend">
                        <button type="button" class="category-side-btn btn btn-primary-outline dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Motherboard
                        </button>
                        <ul class="ham-dropdown-menu dropdown-menu">
                            <a class="dropdown-item" href="#">LGA 1151</a>
                            <a class="dropdown-item" href="#">AM4 Socket</a>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="category btn-group dropend">
                        <button type="button" class="category-side-btn btn btn-primary-outline dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Cases
                        </button>
                        <ul class="ham-dropdown-menu dropdown-menu">
                            <a class="dropdown-item" href="#">NZXT</a>
                            <a class="dropdown-item" href="#">Corsair</a>
                            <a class="dropdown-item" href="#">Thermaltake</a>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="category btn-group dropend">
                        <button type="button" class="category-side-btn btn btn-primary-outline dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Power Supplies
                        </button>
                        <ul class="ham-dropdown-menu dropdown-menu">
                            <a class="dropdown-item" href="#">NZXT</a>
                            <a class="dropdown-item" href="#">Corsair</a>
                            <a class="dropdown-item" href="#">Thermaltake</a>
                            <a class="dropdown-item" href="#">EVGA</a>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SideCategories;