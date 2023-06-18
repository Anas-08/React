

import Button from "./Button"
import Basket from "./Basket"

import leftArrow from '../assets/left.png'
// console.log(leftArrow);
import rightArrow from '../assets/right.png'


// 
import { createRoot } from 'react-dom/client'
const root = createRoot(document.querySelector(".root"));
// root.render(<AppleCounter/>);

// import css
import './AppleCss.css'

const totalAppleCount = 10;
let rightAppleCount = 0;
let leftAppleCount = totalAppleCount - rightAppleCount;

const AppleCounter = () => {


    const leftClickHandler = () => {
        if (rightAppleCount > 0) {

            rightAppleCount--
            leftAppleCount++

            root.render(<AppleCounter />);
        }
    }
    const rightClickHandler = () => {
        if (leftAppleCount > 0) {

            leftAppleCount--
            rightAppleCount++

            root.render(<AppleCounter />);
        }
    }

    return (
        <section>
            <Basket appleCount={leftAppleCount} basketName="Basket 1" />

            <Button clickHandler={leftClickHandler} imageSrc={leftArrow} alternate="Left Arrow" titleName="Left Arrow" />

            {/* <Button clickHandler={(() => console.log('RIGHT'))} imageSrc={rightArrow} alternate="Right Arrow" titleName="Right Arrow" /> */}

            <Button clickHandler={rightClickHandler} imageSrc={rightArrow} alternate="Right Arrow" titleName="Right Arrow" />

            <Basket appleCount={rightAppleCount} basketName="Basket 2" />
        </section>
    )
}

export default AppleCounter
