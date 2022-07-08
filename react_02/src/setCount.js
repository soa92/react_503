import { useState } from "react"; //비구조 할당

const SetCount = () => {
    const [num, setNum] = useState(0);
    // num = 초기값, setNum = 함수
    const plusNum = () => {
        setNum(num + 1);
    }
    const minusNum = () => {
        setNum(num - 1);
    }
    return (
        <div>
            {num}
            <button onClick={plusNum}>숫자올리기</button>
            <button onClick={minusNum}>숫자내리기</button>
        </div>
    )
}

export default SetCount;