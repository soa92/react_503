const SectionCustomer = ({ name, age, color }) => {
    //console.log(props, typeof (props));

    return (
        <div style={{ color: color }}>
            {name}는 {age}살입니다.
        </div>
    )
}

SectionCustomer.defaultProps = {
    name: '무명'
}

export default SectionCustomer;