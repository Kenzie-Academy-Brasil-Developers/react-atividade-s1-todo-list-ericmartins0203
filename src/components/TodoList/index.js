function TodoList({ list, handleTodo }) {
  return (
    <ul>
      {list.map((element, index) => (
        <li key={index}>
          {element}
          <button onClick={() => handleTodo(element)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
