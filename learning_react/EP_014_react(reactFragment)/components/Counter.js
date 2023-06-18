import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    console.log(count)

    // const count = myStateArray[0];
    // const setCount = myStateArray[1];

    // debugger;
    return (
        <div style={{
            textAlign: 'center'
        }}>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>increase Button</button>

        </div>
    )
}

export default Counter
