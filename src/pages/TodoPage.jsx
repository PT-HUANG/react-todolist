import { Footer, Header, TodoCollection, TodoInput, Option } from 'components';
import { useState, useEffect } from 'react';
import { getTodos, createTodo, patchTodo, deleteTodo } from '../api/todos';
import styled from 'styled-components';
import { useStyleContext } from 'Context/StyleContext';

const StyleContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 3rem 0;
  background-color: ${(props) => props.background || '#fff'};
`;

const StyledDiv = styled.div`
  position: relative;
  font-family: ${(props) => props.font || 'sans-serif'};
`;

const TodoPage = () => {
  const { font, background } = useStyleContext();
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  async function handleAddTodo() {
    if (inputValue.length === 0) {
      return;
    }
    try {
      const data = await createTodo({
        title: inputValue,
        isDone: false,
      });
      const newTodoList = [
        ...todos,
        {
          id: data.id,
          title: data.title,
          isDone: data.isDone,
          isEdit: false,
        },
      ];
      setTodos(newTodoList);
      setInputValue('');
    } catch (error) {
      console.error(error);
    }
  }

  async function handleKeyDown() {
    if (inputValue.length === 0) {
      return;
    }
    try {
      const data = await createTodo({
        title: inputValue,
        isDone: false,
      });
      const newTodoList = [
        ...todos,
        {
          id: data.id,
          title: data.title,
          isDone: data.isDone,
          isEdit: false,
        },
      ];
      setTodos(newTodoList);
      setInputValue('');
    } catch (error) {
      console.error(error);
    }
  }

  async function handleToggleDone(todoId) {
    const currentTodo = todos.find((todo) => todo.id === todoId);
    try {
      await patchTodo({
        id: currentTodo.id,
        isDone: !currentTodo.isDone,
      });
      const newTodoList = todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else return todo;
      });
      setTodos(newTodoList);
    } catch (error) {
      console.error(error);
    }
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

  async function handleSave({ id, title }) {
    try {
      await patchTodo({ id, title });
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
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteTodo(id);
      const newTodoList = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(newTodoList);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function getTodosAsync() {
      try {
        const todos = await getTodos();
        setTodos(todos.map((todo) => ({ ...todo, isEdit: false })));
      } catch (error) {
        console.error(error);
      }
    }
    getTodosAsync();
  }, []);

  return (
    <StyleContainer background={background}>
      <StyledDiv font={font} className="todoPage">
        TodoPage
        <Option />
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
      </StyledDiv>
    </StyleContainer>
  );
};

export default TodoPage;
