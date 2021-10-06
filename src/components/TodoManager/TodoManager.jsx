import TodoForm from '../TodoForm/TodoForm';
import './TodoManager'

const TodoManager = ({userData}) => {
    console.log(userData);
    return(
        <div>
            <TodoForm />
            <h1>hello {userData.name}</h1>
        </div>
    )
}

export default TodoManager