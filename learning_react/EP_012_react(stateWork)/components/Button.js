

const Button = ({ imgURL, alternate, titleName, clickHandler }) => {
    return (
        <button onClick={clickHandler} title={titleName}>
            <img src={imgURL} alt={alternate} />

        </button>
    )
}

export default Button
