

const Basket = ({ appleCount, basketName }) => {

    return (
        <div className="basketApple">
            <h1>
                <span>{appleCount} </span>
                apples
            </h1>
            <p>{basketName} {appleCount === 10 && '(full)'} {appleCount === 0 && '(empty)'}
            </p>
            <h4>
                {appleCount === 10 && 'Full'} {appleCount === 0 && 'Empty'}
            </h4>
        </div>
    )
}

export default Basket
