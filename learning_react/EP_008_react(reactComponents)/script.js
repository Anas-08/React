
// import { createRoot } from 'react-dom/client';
import { createRoot } from "react-dom/client";
import React from "react";
import './style.css'
// console.log("Hello");

// const h3 = <h3>Kem Party</h3>

function Card(productDetails) {
    const { img, title, brand, price } = productDetails;
    return (
        <div className="card">
            <img src={img} alt="img" />

            <div className="card_content">
                <h3>{title}</h3>
                <p>{brand}</p>
                <p><b>${price}</b></p>
            </div>
        </div>

    )
}


const root = createRoot(document.querySelector(".root"));
// root.render(h3);



fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
        // console.log(data);

        const container2 = data.products.map((product) => {
            // console.log(product);

            return <Card title={product.title} img={product.thumbnail} brand={product.brand} price={product.price} key={product.id} />

        });

        // console.log(container2)
        root.render(<div className="container">{container2}</div>);

    });


// const h1 = <h1>Hello using JSX</h1>
// root.render(h1);

function fun() {
    return <h2>Hello from function</h2>
}


// root.render({
//     $$typeof: Symbol.for('react.element'),
//     type: Card,  // we can also give function name in type
//     ref: null,
//     props: {
//         title: 'iphone 9',
//         img: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//         brand: 'Apple',
//         price: 999,
//         key: 12

//     }
// });

// root.render(React.createElement(Card, {
//     title: 'iphone 9',
//     img: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//     brand: 'Apple',
//     price: 999,
//     key: 12
// }))


//  this is a react component
//  function which return jsx is react component
// react component , react element type is function and the function return jsx is react component

// root.render(
//     <Card title="iphone 9" img="https://i.dummyjson.com/data/products/1/thumbnail.jpg" brand="Apple" price="999" />
// );