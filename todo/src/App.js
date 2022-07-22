import { useRef, useState } from "react";
import TodoList from "./TodoList";
import CreateTodoList from "./CreateTodoList";
import Wrapper from "./Wrapper";

const App = () => {
  const [todolist, setTodolist] = useState([
    { id: 1, content: '오늘은 메로나 먹을거임' },
    { id: 2, content: '메로나 먹고 맥주 한 잔' },
    { id: 3, content: '맥주 마시고 자기' },
  ])
  return (
    <Wrapper>
      <TodoList todolist={todolist} />
      <CreateTodoList todolist={todolist} setTodolist={setTodolist} />
    </Wrapper>

  )
}

export default App;