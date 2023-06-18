

import { createRoot } from "react-dom/client";
import './style.css';



function Card(key, title, img, brand, price) {
    // console.log(key);
    return <div className="card" key={key}>
        <img src={img} alt="iphone" />
        <div className="card-content">
            <h3>{title}</h3>
            <p>{brand}</p>
            <p><b>${price}</b></p>
        </div>
    </div>

}

const root = createRoot(document.querySelector(".root"));


fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
        const container2 = data.products.map((product) => {
            return Card(product.id, product.title, product.thumbnail, product.brand, product.price);
        });
        root.render(<div className="container">{container2}</div>);
    });



