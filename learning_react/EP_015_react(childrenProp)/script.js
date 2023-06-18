


import { createRoot } from "react-dom/client";
import App from "./App";


const div = document.querySelector(".root");
// console.log(div);
const root = createRoot(div);
root.render(<App />);