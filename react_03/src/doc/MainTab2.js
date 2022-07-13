import { useEffect, useRef, useState } from "react";

const MainTab2 = () => {
    const tabData = [
        { id: 1, menu: 'menu01', content: 'content01' },
        { id: 2, menu: 'menu02', content: 'content02' },
        { id: 3, menu: 'menu03', content: 'content03' }
    ];

    const tabContent = useRef();
    const [tabNumber, setTabNumber] = useState(0);
    const [tabnum, setTabnum] = useState();
    const setTab = (fg) => {
        setTabNumber(fg)
        console.log(tabnum);
        const tabList = [...tabnum];
        console.log(tabList);
        tabList.map(el => el.classList.remove('on'));
        tabList[fg].classList.add('on');
        // const divAll = document.querySelectorAll('.tabContent2>div');
        // divAll.forEach(el => el.classList.remove('on'));
        // divAll[fg].classList.add('on');
    }

    useEffect(() => {
        setTabnum(tabContent.current.children);
    }, [])
    return (
        <section className="mainTab2">
            <ul>
                {
                    tabData.map((el, idx) => (
                        <li key={el.id} onClick={() => setTab(idx)}>{el.menu}</li>
                    ))
                }
            </ul>
            <div className="tabContent2" ref={tabContent}>
                <div className="on">
                    01. Note that the development build is not optimized.
                    To create a production build, use npm run build.
                </div>
                <div>
                    02. Note that the development build is not optimized.
                    To create a production build, use npm run build.
                </div>
                <div>
                    03. Note that the development build is not optimized.
                    To create a production build, use npm run build.
                </div>
            </div>
        </section >
    )
}

export default MainTab2;