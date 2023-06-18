
const Button = ({ imageURL, alternate, titleName }) => {
    return (

        <button title={titleName}>
            <img src={imageURL} alt={alternate} />
        </button>

    )
}

export default Button
