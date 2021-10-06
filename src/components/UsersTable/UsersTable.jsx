import './UsersTable.scss'
import {countCompletionRate, findUser} from '../../helpers/utils' 
import { useState } from 'react'
import TodoManager from '../TodoManager/TodoManager'

const initialUsers = [
    {
        id:1,
        name: 'Peter Bishop',
        todos:[]
    },
    {
        id:2,
        name: 'Oilivia Dunha',
        todos:[]
    },
    {
        id:3,
        name: 'Walter Bishop',
        todos:[]
    },
    {
        id:4,
        name: 'William Bell',
        todos:[]
    },
    {
        id:5,
        name: 'David Robert Jones',
        todos:[]
    },
    {
        id:6,
        name: 'Phillip Broyles',
        todos:[]
    },
    {
        id:7,
        name: 'Nina Sharp',
        todos:[]
    },
    {
        id:8,
        name: 'Charlie Franklin',
        todos:[]
    },
    {
        id:9,
        name: 'Astrid Farnsworth',
        todos:[]
    },
]
const UsersTable = () => {
const [users, setUsers] = useState(initialUsers)
const [showTodoManager, setShowTodoManager] = useState(false)
const [currUserId, setCurrUserId] = useState()
    
const handleRowClick = (id) => {
    setShowTodoManager(true)
    setCurrUserId(id)
}
console.log(users);
console.log(currUserId);
    return(
        <div className='usersTable'>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Completion rate (%)</th>
                </tr>
            </thead>
            <tbody>
                {
                    users && users.map((user)=>{
                        return(
                            <tr key={user.id} onClick={()=>handleRowClick(user.id)}>
                                <td>{user.name}</td>
                                <td>{countCompletionRate(user.todos)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        {
            showTodoManager && <TodoManager userData = {findUser(users, currUserId)}/>
        }
        </div>
    )
}

export default UsersTable