import Slider from "react-slick";
import './slick.min.css';

const MainVisual = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <Slider {...settings}>
                <figure className="itm01">
                    <div className="inner">
                        <h2>01. added 2 packages, and audited 1447 packages in 4s</h2>
                        <p>To address all issues (including breaking changes), run:
                            npm audit fix --forcee</p>
                    </div>
                </figure>
                <figure className="itm02">
                    <div className="inner">
                        <h2>02. added 2 packages, and audited 1447 packages in 4s</h2>
                        <p>To address all issues (including breaking changes), run:
                            npm audit fix --forcee</p>
                    </div>
                </figure>
                <figure className="itm03">
                    <div className="inner">
                        <h2>03. added 2 packages, and audited 1447 packages in 4s</h2>
                        <p>To address all issues (including breaking changes), run:
                            npm audit fix --forcee</p>
                    </div>
                </figure>
            </Slider>
        </>
    )
}

export default MainVisual;