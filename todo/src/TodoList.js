import { useEffect } from "react"

const TodoList = ({ todolist, setTodolist }) => {
    // const { name } = props;
    const onDelete = (num) => {
        console.log(num)
        setTodolist(todolist.filter(el => el.id !== num))
        // filter(it=> 조건이 참인 것을 새 배열로 반환)
    }
    useEffect(() => {
        console.log('마운트 되었을 때 / 업데이트 되었을 때 1번')
    })
    return (
        <div className="TodoListWrap">
            <h2>{todolist.length ? <strong>오늘 할 일은 {todolist.length}개</strong> : <span>'할일 없음'</span>}</h2>
            <hr />
            <ul className="TodoList">
                {
                    todolist.map(el => <li key={el.id}>{el.content} <i className="xi-close closeBtn" onClick={() => onDelete(el.id)}></i></li>)
                }
            </ul>
        </div>

    )
}

export default TodoList;