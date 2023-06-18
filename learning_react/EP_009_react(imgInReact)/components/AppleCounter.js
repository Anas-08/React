// import button components
import Button from "./Button"

// import Basket
import AppleBasket from "./AppleBasket"

// import css 
import './AppleCounter.css'

// import images
import leftArrow from '../asset/images/left.png'
import rightArrow from '../asset/images/right.png'

const AppleCounter = () => {
    return (
        <section>
            <AppleBasket appleCount={10} basketName="Basket 1" />
            <Button imageURL={leftArrow} alternate="Left Arrow" titleName="Left Arrow" />
            <Button imageURL={rightArrow} alternate="Right Arrow" titleName="Right Arrow" />
            <AppleBasket appleCount={0} basketName="Basket 2" />

        </section>
    )
}

export default AppleCounter