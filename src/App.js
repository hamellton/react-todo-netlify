import Navbar from "./components/Navbar"
import TodoForm from "./components/TodoForm"
import {useEffect, useState} from "react"
import TodoList from "./components/TodoList"

const App = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]')

        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    const addTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false
        }
        setTodos(prevState => [newTodo, ...prevState])
    }

    const addToggle = (id) => {
        setTodos(prevState =>
        prevState.map((el) => {
            if (el.id === id) {
                return {
                    id: el.id,
                    title: el.title,
                    completed: !el.completed
                }
            }
            return el
        }))
    }

    const removeToggle = (id) => {
        const shouldRemove = window.confirm('Вы уверенны, что хотите удалить запись?')
        if (shouldRemove) {
            setTodos(prevState => prevState.filter(el => el.id !== id))
        }
    }

    return (
        <div className="container">
            <Navbar/>
            <TodoForm onAdd={addTodo}/>
            <TodoList onRemove={removeToggle} onToggle={addToggle} todos={todos}/>
        </div>
    )
}

export default App
