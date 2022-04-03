
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo,fetchTodos} from './store/todoSlice'
import './App.css';
import { InputField } from './components/InputField';
import { TodoList } from './components/TodoList';

function App() {

  const [text, setText] = useState('');
  const {status, error} = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addTask = () => dispatch(
    addTodo({text}),
    setText('')
    )
    useEffect(() => {
      dispatch(fetchTodos());
    }, [dispatch])

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
      {status === 'loading' && <h2>loading ...</h2>}
      {error &&  <h2>An error occured: {error}</h2>}
     <TodoList />
    </div>
  );
}

export default App;
