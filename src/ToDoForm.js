import { useState } from 'react';

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        maxLength={25}
        type="text"
        onChange={handleChange}
        placeholder="Enter the task..."
      />
      <button>Save</button>
    </form>
  );
}

export default ToDoForm;
