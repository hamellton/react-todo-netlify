import React, { useRef, useState } from 'react'

const TodoForm = ({onAdd}) => {
    let ref = useRef()
    const [title, setTitle] = useState('')

    const addHandler = () => {
        setTitle(ref.current.value)
    }

    const addTodo = (event) => {
        if (event.key === 'Enter') {
            onAdd(ref.current.value)
            setTitle('')
        }
    }

    return (
        <div className="input-field mt3">
            <input
                onKeyPress={addTodo}
                onChange={addHandler}
                ref={ref}
                value={title}
                type="text"
                id="title"
                placeholder="Введите название дела"
            />
            <label htmlFor="title" className="active">Введите название дела</label>
        </div>
    )
}

export default TodoForm