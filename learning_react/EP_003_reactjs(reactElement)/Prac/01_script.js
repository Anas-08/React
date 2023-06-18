

//  pure Vanilla JS

// const box = document.querySelector("#root");

// const sec1 = document.createElement('section');
// const sec2 = document.createElement('section');
// box.append(sec1);
// box.append(sec2);

// const para1 = document.createElement('p');
// para1.innerHTML = "Hello Js";
// sec1.append(para1);

// const para2 = document.createElement('p');
// para2.innerHTML = "Hello ReactJs";
// sec1.append(para2);


// const formOne = document.createElement('form');
// formOne.action = '#';
// formOne.method = 'post';
// sec2.append(formOne);


// const formContainer = document.createElement('div');
// formContainer.className = 'formContainer';
// formOne.append(formContainer);


// const labelUsername = document.createElement('label');
// labelUsername.innerHTML = 'Username : ';
// labelUsername.htmlFor = 'username';

// formContainer.append(labelUsername);

// const inputUsername = document.createElement('input');
// inputUsername.id = 'username';
// inputUsername.placeholder = 'Username';
// formContainer.append(inputUsername);


// const formContainerTwo = document.createElement('div');
// formContainerTwo.className = 'formContainerTwo';
// formOne.append(formContainerTwo);


// const labelUsernameTwo = document.createElement('label');
// labelUsernameTwo.innerHTML = 'Password : ';
// labelUsernameTwo.htmlFor = 'password';
// formContainerTwo.append(labelUsernameTwo);


// const inputPassword = document.createElement('input');
// inputPassword.id = 'password';
// inputPassword.placeholder = 'Password';
// formContainerTwo.append(inputPassword);



const container = React.createElement('div', {}, [
    React.createElement('section', { key: 1, className: 'paraTwo' }, [
        React.createElement('p', { key: 1, className: 'paraOne' }, 'Hello Js'),
        React.createElement('p', { key: 2, className: 'paraTwo' }, 'Hello ReactJs'),
    ]),

    React.createElement('section', { key: 2 }, [
        React.createElement('form', { key: 1, }, [
            React.createElement('div', { key: 2, className: 'divOneForm' }, [
                React.createElement('label', { key: 3, className: 'labelUsername', htmlFor: 'username' }, 'Username: '),
                React.createElement('input', { key: 4, id: 'username', type: 'text' },),
            ]),
            React.createElement('div', { key: 3, className: 'divTwoForm' }, [
                React.createElement('label', { key: 3, className: 'labelPassword', htmlFor: 'password' }, 'Password: '),
                React.createElement('input', { key: 4, id: 'password', type: 'password' },),
            ]),
        ])
    ]),
]);

const root = document.querySelector('#root');

const rootDom = ReactDOM.createRoot(root);
rootDom.render(container)




