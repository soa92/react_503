import { useRef, useState, useEffect } from "react";

const CreateTodoList = ({ todolist, setTodolist }) => {
    const nextId = useRef(4);
    const refInput = useRef(null);
    const [input, setInput] = useState({
        id: nextId.current,
        content: ''
    });
    const onChange = (e) => {
        const { name, value } = e.target;
        setInput({
            id: nextId.current,
            [name]: value,
        })
    }

    const inputHandler = () => {
        nextId.current++;
        if (input.content.length < 5) {
            alert('5자 이상 입력하세요');
            return
        }
        setTodolist([
            ...todolist,
            input
        ]);
        setInput({
            id: nextId.current,
            content: ''
        });
        console.log(input.content, todolist);
    }

    useEffect(() => {
        console.log(input.current, todolist, refInput.current);
        console.log('마운트 되었을 때 1번')
        refInput.current.focus();
    }, [])
    // 한번만 실행해야 할 때 쓴다고 함


    return (
        <div className="CreateTodoList">
            <input name='content' onChange={onChange} value={input.content} ref={refInput} />
            <button onClick={inputHandler}>입력</button>
        </div>
    )
}

export default CreateTodoList;