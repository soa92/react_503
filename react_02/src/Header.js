import { useRef } from "react";
// document.query... 이런 거 리액트에서 잘 안씁니다. useRef 씁니다.

function Header() {

    const toggleBanner = useRef(null);
    const toggleClass = e => {
        toggleBanner.current.classList.toggle('on');
        e.target.classList.toggle('on');
    }
    return (
        <header className="header">
            <div className="top_banner">
                <div className="container" ref={toggleBanner}>
                    <h2>Quickly get a project started with any of our examples</h2>
                    <p>ranging from using parts of the framework to custom components and layouts.</p>
                </div>
                <i className="xi-arrow-top" onClick={toggleClass}></i>
            </div>
        </header>
    );
}

export default Header;