import React from 'react'

const TodoList = ({todos, onToggle, onRemove}) => {
    return (
        <ul>
            {todos.map((el) => {
                const classes = ['todo']
                if (el.completed) {
                    classes.push('completed')
                }

                const shouldRemove = (event) => {
                    event.preventDefault()

                    onRemove(el.id)
                }
                return (
                    <li key={el.id} className={classes.join(' ')}>
                        <label>
                            <input onChange={() => onToggle(el.id)} type="checkbox" checked={el.completed}/>
                            <span>{el.title}</span>
                            <i onClick={(event) => shouldRemove(event)} className="material-icons red-text">delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList