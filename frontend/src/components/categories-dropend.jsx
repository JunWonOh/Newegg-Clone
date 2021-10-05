import React from "react";

function SideCategories() {
    return (
        <div id="item categories" style={{width: "10.5%", minWidth: "170px"}}>
            <ul className="category-list">
                <li>
                    <div className="category btn-group dropend">
                        <button type="button" className="category-side-btn btn btn-primary-outline dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Processors
                        </button>
                        <ul className="ham-dropdown-menu dropdown-menu">
                            <a className="dropdown-item" href="/p/intel">Intel</a>
                            <a className="dropdown-item" href="/p/amd">AMD</a>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="category btn-group dropend">
                        <button type="button" className="category-side-btn btn btn-primary-outline dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Graphics Card
                        </button>
                        <ul className="ham-dropdown-menu dropdown-menu">
                            <a className="dropdown-item" href="/p/nvidia">NVIDIA</a>
                            <a className="dropdown-item" href="/p/amd">AMD</a>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="category btn-group dropend">
                        <button type="button" className="category-side-btn btn btn-primary-outline dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Memory
                        </button>
                        <ul className="ham-dropdown-menu dropdown-menu">
                            <a className="dropdown-item" href="/p/corsair">Corsair</a>
                            <a className="dropdown-item" href="/p/gskill">G. Skill</a>
                            <a className="dropdown-item" href="/p/crucial">Crucial</a>
                            <a className="dropdown-item" href="/p/samsung">Samsung</a>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="category btn-group dropend">
                        <button type="button" className="category-side-btn btn btn-primary-outline dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Motherboard
                        </button>
                        <ul className="ham-dropdown-menu dropdown-menu">
                            <a className="dropdown-item" href="/p/lga1151">LGA 1151</a>
                            <a className="dropdown-item" href="/p/am4">AM4 Socket</a>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="category btn-group dropend">
                        <button type="button" className="category-side-btn btn btn-primary-outline dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Cases
                        </button>
                        <ul className="ham-dropdown-menu dropdown-menu">
                            <a className="dropdown-item" href="/p/nzxt">NZXT</a>
                            <a className="dropdown-item" href="/p/corsair">Corsair</a>
                            <a className="dropdown-item" href="/p/thermaltake">Thermaltake</a>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="category btn-group dropend">
                        <button type="button" className="category-side-btn btn btn-primary-outline dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Power Supplies
                        </button>
                        <ul className="ham-dropdown-menu dropdown-menu">
                            <a className="dropdown-item" href="/p/nzxt">NZXT</a>
                            <a className="dropdown-item" href="/p/corsair">Corsair</a>
                            <a className="dropdown-item" href="/p/thermaltake">Thermaltake</a>
                            <a className="dropdown-item" href="/p/evga">EVGA</a>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SideCategories;