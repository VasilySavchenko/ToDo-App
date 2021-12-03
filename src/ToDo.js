function ToDo({ todo, toggleTask, removeTask }) {
    return (
        <div key={todo.id} className="item-todo">
            <div 
                className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}
                >
                {todo.text}
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                	&times;
            </div>
        </div>
    )
}

export default ToDo