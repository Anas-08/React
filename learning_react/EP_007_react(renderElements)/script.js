// import { user } from "./data.js";

import { createRoot } from "react-dom/client";
import './style.css'


// const h1 = <h1>Hello Hi</h1>
// const card = <div className="card">
//     <img src="https://images.pexels.com/photos/797519/pexels-photo-797519.jpeg?auto=compress&cs=tinysrgb&w=600" alt="iphone" />
//     <div className="card_content">
//         <h3>iphone 12</h3>
//         <p>Apple</p>
//         <p><b>$999</b></p>
//     </div>
// </div>

function Card(key, img, title, brand, price) {
    // console.log(key);
    return (
        <div className="card" key={key}>
            <img src={img} alt="iphone" />
            <div className="card_content">
                <h3> {title} </h3>
                <p> {brand} </p>
                <p><b>${price}</b></p>
            </div>
        </div>

    )
}

// const container = [
//     Card(1),
//     Card(2),
//     Card(3),
//     Card(4),
//     Card(5),
//     Card(6),
//     Card(7),
//     Card(8),
//     Card(9),
//     Card(10),


// ];


const root = createRoot(document.querySelector(".root"));
// root.render(<div className="container"> {container} </div>);
// console.log(user.name);
// console.log("Hello");

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
        console.log(data);

        const container2 = data.products.map((product) => {
            // console.log(product);
            return Card(product.id, product.thumbnail, product.title, product.brand, product.price);

        });

        console.log(container2);
        root.render(<div className="container"> {container2} </div>);
    });
