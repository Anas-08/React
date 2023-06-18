

const Button = ({ imgURL, alternate, clickHandler, children }) => {
    console.log(children);
    return (
        <button onClick={clickHandler} title={children}>
            {children}
            <img src={imgURL} alt={alternate} />

        </button>
    )
}

export default Button
