import React, {useState} from "react";

const Counter = () => {
    // useState
    // num => 0을 기본값으로 갖는 변수
    // setNumber => num에 있는 값을 변경시킬 수 있는 setter 함수
    const [num, setNumber] = useState(0);

    const increase = () => {
        // num = num + 1 이렇게 못하고 setter 함수 통해서만 변경 가능
        setNumber(num + 1);

    }

    const decrease = () => {
        setNumber(num - 1);
    }

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    );
};

export default Counter