import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import './TodoManager'

const TodoManager = ({userId, userName,show}) => {
    
    return(
        <div>
            <TodoForm userId={userId} show={show} />
            <h1>hello {userName}</h1>
            <TodoList userId={userId} />
        </div>
    )
}

export default TodoManager