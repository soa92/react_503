import { useState } from "react";

const ToggleClass = () => {
    // 아래와 같으나 this가 없음

    const [toggle, setToggle] = useState(false);
    const toggleTF = () => {
        setToggle(!toggle);
    }
    return (
        <>
            <div className={toggle ? 'on' : ''}>TG</div>
            <div onClick={toggleTF}>toggle</div>
        </>

    )
}

export default ToggleClass;

// const ToggleClass = function(){

// }

// function ToggleClass() {

// }

