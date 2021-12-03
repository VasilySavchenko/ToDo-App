import { useState, useEffect } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import { createTodo } from './Utils';

function MainSection() {
  const [todos, setTodos] = useState(() => {
    const raw = localStorage.getItem('my-todo');
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem(`my-todo`, JSON.stringify(todos));
  }, [todos]);

  const addTask = (userInput) => {
    if (userInput) {
      setTodos([...todos, createTodo(userInput)]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      ),
    ]);
  };

  return (
    <section className="main-section">
      <div className="my-focus-title">
        <h1>
          My Focus:<span className="counter-focus">{todos.length}</span>
        </h1>
      </div>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        );
      })}
    </section>
  );
}

export default MainSection;
