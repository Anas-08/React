// const h2 = <h4>Hello Babel</h4>
// const h2 = React.createElement('div', {}, [
//     React.createElement('section', { key: 1, className: 'paraTwo' }, [
//         React.createElement('p', { key: 1, className: 'paraOne' }, 'Hello Js'),
//         React.createElement('p', { key: 2, className: 'paraTwo' }, 'Hello ReactJs'),
//     ]),

//     React.createElement('section', { key: 2 }, [
//         React.createElement('form', { key: 1, }, [
//             React.createElement('div', { key: 2, className: 'divOneForm' }, [
//                 React.createElement('label', { key: 3, className: 'labelUsername', htmlFor: 'username' }, 'Username: '),
//                 React.createElement('input', { key: 4, id: 'username', type: 'text' },),
//             ]),
//             React.createElement('div', { key: 3, className: 'divTwoForm' }, [
//                 React.createElement('label', { key: 3, className: 'labelPassword', htmlFor: 'password' }, 'Password: '),
//                 React.createElement('input', { key: 4, id: 'password', type: 'password' },),
//             ]),
//         ])
//     ]),
// ]);;

// const h2 = <div>
//     <section className="paraTwo">
//         <p className="paraOne">Hello Js</p>
//         <p className="paraTwo">Hello ReactJs</p>
//     </section>

//     <section>
//         <form>
//             <div className="divOneForm">

//                 <label className="labelUsername" htmlFor="username">Username: </label>
//                 <input id="username" type="text" />
//             </div>

//             <div className="divTwoForm">
//                 <label className="labelPassword" htmlFor="password">Password: </label>
//                 <input id="password" type="password" />

//             </div>
//         </form>
//     </section>
// </div>;

const user = "Anas";
const h2 = /*#__PURE__*/React.createElement("p", null, "Hello ", /*#__PURE__*/React.createElement("b", null, " ", user, " "), " ");
const box = document.querySelector('.root');
const root = ReactDOM.createRoot(box);
root.render(h2);
console.log(h2);