

const Basket = ({ appleCount, basketName }) => {
    return (
        <div className="basketApple">
            <h1>
                <span>{appleCount} </span>
                apples
            </h1>
            <p>{basketName}</p>
        </div>
    )
}

export default Basket
