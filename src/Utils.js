  const generateRandomId = () => Math.random().toString(36).substr(2,9);

 export const createTodo = (text) => {
  return {
    text,
    done: false,
    id: generateRandomId(),
    createdDate: new Date(),
  };
};