
// const newHead = React.createElement('div', { className: 'noname', id: 'nothing' }, 'Hello ReactJs');

// const headOne = document.querySelector('h1');
// const headTwo = document.querySelector('h2');
// const headThree = document.querySelector('h3');
// const headFour = document.querySelector('h4');
// const headFive = document.querySelector('h5');
// const headSix = document.querySelector('h6');

// const root = ReactDOM.createRoot(document.querySelector('.para'));
// root.render(newHead);



// const newHead = React.createElement('h1', { className: 'noname', id: 'nothing' }, 'Hello ReactJs');
// const box = document.querySelector('.box');
// console.log(box)
// const domElement = ReactDOM.createRoot(box);
// domElement.render(newHead);






// const domElement = ReactDOM.createRoot(box);
// domElement.render(newHead);


// const createNewElement = document.createElement('h6');
// createNewElement.innerHTML = "Hello React";

// box.append(newHead);

// const haha = {

//     $$typeof: Symbol.for('react.element'),
//     type: "h1",
//     ref: null,
//     props: {
//         className: "obj1",
//         id: "obj",
//         children: "Directly From Object"
//     },

// }


// const newHead2 = React.createElement('h5', { className: 'noname1', id: 'nothing1' }, 'Kem Party');
// const newHead3 = React.createElement('h4', { className: 'noname2', id: 'nothing2' }, 'Kem Party 1');
// const newHead4 = React.createElement('h3', { className: 'noname3', id: 'nothing3' }, 'Kem Party 2');
// const box2 = document.querySelector('.box2');
// console.log(box2)
// const domElement2 = ReactDOM.createRoot(box2);
// domElement2.render(newHead2);
// domElement2.render(newHead3);
// domElement2.render(newHead4);


// domElement2.render({
//     $$typeof: Symbol.for('react.element'),
//     type: "h1",
//     ref: null,
//     props: {
//         className: "obj1",
//         id: "obj",
//         children: {
//             $$typeof: Symbol.for('react.element'),
//             type: "b",
//             ref: null,
//             props: {
//                 className: "obj2",
//                 id: "obj2",
//                 children: {
//                     $$typeof: Symbol.for('react.element'),
//                     type: "i",
//                     ref: null,
//                     props: {
//                         className: "obj3",
//                         id: "obj3",
//                         children: {
//                             $$typeof: Symbol.for('react.element'),
//                             type: "span",
//                             ref: null,
//                             props: {
//                                 className: "red",
//                                 children: "Directly From Object"
//                             },
//                         }
//                     },
//                 }
//             },
//         }
//     },
// });





// domElement2.render(
//     {
//         $$typeof: Symbol.for('react.element'),
//         type: "div",
//         ref: null,
//         props: {
//             className: "obj1",
//             id: "obj",
//             children: [
//                 {
//                     $$typeof: Symbol.for('react.element'),
//                     type: "h1",
//                     ref: null,
//                     props: {
//                         className: "obj1",
//                         id: "obj",
//                         children: "Hey_One"
//                     },
//                 },
//                 {
//                     $$typeof: Symbol.for('react.element'),
//                     type: "h2",
//                     ref: null,
//                     props: {

//                         children: "Hey_Two"
//                     },
//                 },
//                 {
//                     $$typeof: Symbol.for('react.element'),
//                     type: "h3",
//                     ref: null,
//                     props: {
//                         children: "Hey_Three"
//                     },
//                 },
//                 {
//                     $$typeof: Symbol.for('react.element'),
//                     type: "h4",
//                     ref: null,
//                     props: {
//                         children: "Hey_Four"
//                     },
//                 },
//                 {
//                     $$typeof: Symbol.for('react.element'),
//                     type: "h5",
//                     ref: null,
//                     props: {
//                         children: "Hey_Five"
//                     },
//                 },
//                 {
//                     $$typeof: Symbol.for('react.element'),
//                     type: "h6",
//                     ref: null,
//                     props: {
//                         children: "Hey_Six"
//                     },
//                 },

//             ]
//         },
//     }
// )






const root = document.querySelector('.root');

const container = React.createElement('div', { className: 'container', key: 1 }, [

    React.createElement('section', { className: 'sec', key: 1 }, [
        React.createElement('p', { className: 'para', key: 2 }, 'Hey React'),
        React.createElement('p', { className: 'para', key: 3 }, 'Hey React from another para'),
        React.createElement('img', { className: 'image', style: { width: 200, backgroundColor: 'teal', borderRadius: 12, padding: 16 }, src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K', key: 4 },),

    ]
    ),

    React.createElement('section', { className: 'secForm', key: 2 }, [
        React.createElement('form', { className: 'para', formAction: '#', formMethod: 'post', key: 5 },)

    ]),
]);

const newRoot = ReactDOM.createRoot(root);
newRoot.render(container);


