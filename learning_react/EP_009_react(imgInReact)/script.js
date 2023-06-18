// import { createRoot } from "react-dom/client";
import { createRoot } from 'react-dom/client';
import App from './app';

const h1 = <h1>Hello</h1>
const div = document.querySelector(".root");
const root = createRoot(div);
root.render(<App />);

// root.render([<h1>Hello</h1>, <h2>Hello</h2>, <h3>Hello</h3>, <h4>Hello</h4>, <h5>Hello</h5>, <h6>Hello</h6>]);
// root.render(<h6>hi</h6>);
// console.log(div);
