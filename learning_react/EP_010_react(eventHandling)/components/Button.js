

const Button = ({ imageSrc, alternate, titleName, clickHandler }) => {
    // console.log(imageUrl)
    return (
        <button onClick={clickHandler} title={titleName}>
            <img src={imageSrc} alt={alternate} />
        </button>
    )
}

export default Button
