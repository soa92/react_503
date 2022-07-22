const TodoList = ({ todolist }) => {
    // const { name } = props;
    return (
        <ul className="TodoList">
            {
                todolist.map(el => <li key={el.id}>{el.content}</li>)
            }
        </ul>
    )
}

export default TodoList;