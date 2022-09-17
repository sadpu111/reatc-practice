import {useState} from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return ;
    }
    setTodos((cur) => [todo, ...cur])
    setTodo("");
  }
  console.log(todos);

  return (
  <div>
    <h1>My Todos ({todos.length})</h1>
    <form onSubmit={onSubmit}>
      <input 
        onChange={onChange} 
        type="text" 
        value={todo} 
        placeholder="Enter your todo...">
      </input>
      <button>
        Add to Todos
      </button>
    </form>
    <hr />
    {todos.map((item) => <li key={item.id}>{item}</li>)}
  </div>
  );
  }

export default App;
