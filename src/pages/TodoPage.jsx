import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState } from 'react';

const dummyTodos = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
  },
];

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(dummyTodos);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleAddTodo() {
    if (inputValue.length === 0) {
      return;
    }
    const newTodoList = [
      ...todos,
      {
        title: inputValue,
        isDone: false,
        id: Math.random() * 100,
      },
    ];
    setTodos(newTodoList);
    setInputValue('');
  }

  const handleKeyDown = handleAddTodo;

  function handleToggleDone(todoId) {
    const newTodoList = todos.map((todo) => {
      if (todoId === todo.id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else return todo;
    });
    setTodos(newTodoList);
  }

  function handleChangeMode({ id, isEdit }) {
    const newTodoList = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isEdit,
        };
      } else
        return {
          ...todo,
          isEdit: false,
        };
    });
    setTodos(newTodoList);
  }

  function handleSave({ id, title }) {
    const newTodoList = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title,
          isEdit: false,
        };
      } else return todo;
    });
    setTodos(newTodoList);
  }

  function handleDelete(id) {
    const newTodoList = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodoList);
  }

  return (
    <div>
      TodoPage
      <Header />
      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onAddTodo={handleAddTodo}
        onKeyDown={handleKeyDown}
      />
      <TodoCollection
        todos={todos}
        onToggleDone={handleToggleDone}
        onSave={handleSave}
        onDelete={handleDelete}
        onChangeMode={handleChangeMode}
      />
      <Footer items={todos.length} />
    </div>
  );
};

export default TodoPage;
