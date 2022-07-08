import Slider from "react-slick";
import './slick.min.css';


const MainVisual = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        afterChange: index => {
            const ITEM = document.querySelectorAll('.mainSlider figure');
            ITEM.forEach(ele => ele.classList.remove('on'));
            ITEM[index + 1].classList.add('on');
            // console.log(index, ITEM);
        }
    };
    return (
        <>
            <Slider className="mainSlider" {...settings}>
                <figure className="itm01 on">
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