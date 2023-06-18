

const user = "Anas";

const h2 = <p>Hello <b> {user} </b></p>

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(h2);

console.log(h2);