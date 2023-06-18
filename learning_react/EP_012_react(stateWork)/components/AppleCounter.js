import Button from "./Button"

import leftArrow from '../assets/left.png';
import rightArrow from '../assets/right.png';
import Basket from "./Basket";

import './AppleCss.css'

import { useState } from "react";


// import { createRoot } from "react-dom/client";
// import { useState } from "react";
// const root = createRoot(document.querySelector(".root"));


// let rightApple = 0;
// let leftApple = totalApple - rightApple;

const AppleCounter = () => {
    const totalApple = 10;

    const [rightApple, setRightApple] = useState(0);
    const [leftApple, setLeftApple] = useState(totalApple - rightApple);

    const leftClickHandler = () => {
        if (rightApple > 0) {
            setRightApple(rightApple - 1);
            setLeftApple(leftApple + 1)

            // rightApple--
            // leftApple++
            // root.render(<AppleCounter />);
        }
    }

    const rightClickHandler = () => {
        if (leftApple > 0) {

            setLeftApple(leftApple - 1);
            setRightApple(rightApple + 1);
            // leftApple--
            // rightApple++
            // root.render(<AppleCounter />);
            // console.log("Right");
        }
    }


    return (
        <section>
            <Basket appleCount={leftApple} basketName="Basket 1" />
            <Button clickHandler={leftClickHandler} imgURL={leftArrow} alternate="Left Arrow" titleName="Left Arrow" />
            <Button clickHandler={rightClickHandler} imgURL={rightArrow} alternate="Right Arrow" titleName="Right Arrow" />
            <Basket appleCount={rightApple} basketName="Basket 2" />
        </section>
    )
}

export default AppleCounter
