const TodoList = ({ TodoList }) => {
    return (
        <ul>
            {console.log(TodoList)}
            {TodoList.map(el => <li key={el.id}>{el.content}</li>)}
        </ul>
    )
}

export default TodoList;