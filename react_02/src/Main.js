import MainVisual from "./MainVisual";
import SetCount from "./setCount"
import ToggleClass from "./ToggleClass";
import SectionCustomer from "./SectionCustomer";
import Map from "./Map";

export default function Main() {
    const Test = ({ name }) => {
        return (
            <div>{name}가 임시로 만든 컴포넌트</div>
        )
    }
    return (
        <main className="mainVisual">
            <MainVisual />
            <Test name='바보' />
            <SectionCustomer name='주소아' age='41' color='#f00' />
            <SectionCustomer name='홍소안' age='42' color='#ff0' />
            <SectionCustomer name='주작이' age='43' color='#f0f' />
            <SectionCustomer age='44' color='#00f' />
            <SetCount />
            <Map />
            <ToggleClass />
        </main>
    )
}