import TodoItem from './TodoItem';

const TodoCollection = ({
  todos,
  onToggleDone,
  onSave,
  onDelete,
  onChangeMode,
}) => {
  return (
    <div className="todoCollection">
      TodoCollection
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleDone={onToggleDone}
            onSave={onSave}
            onDelete={onDelete}
            onChangeMode={onChangeMode}
          />
        );
      })}
    </div>
  );
};

export default TodoCollection;
