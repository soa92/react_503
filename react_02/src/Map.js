const Map = () => {
    const DATA = [
        { id: 1, name: '주소아', title: '하고싶은 말', content: '나는 바보다', src: './img/lesedilarona01.jpg' },
        { id: 2, name: '홍소안', title: '하고싶은 발', content: '나는 마보다', src: './img/lesedilarona02.jpg' },
        { id: 3, name: '주작이', title: '하고싶은 목', content: '나는 나보다', src: './img/lesedilarona03.jpg' },
        { id: 4, name: '홍작이', title: '하고싶은 손', content: '나는 다보다', src: './img/lesedilarona04.jpg' },

    ]
    return (
        <section className="customer">
            <ul>
                {
                    DATA.map((elm, idx) =>
                        <li key={elm.id}>
                            <div className="box"><img src={elm.src} alt='바부팅' /></div>
                            <strong>{elm.name}가 {elm.title}은 "{elm.content}"입니다.</strong>
                        </li>
                    )
                }
            </ul>
        </section>
    )
}

export default Map;