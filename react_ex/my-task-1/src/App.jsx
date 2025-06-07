import {useEffect, useState} from 'react';
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

const App = () => {
    const [list, setList] = useState([])
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        fetch('https://dummyjson.com/todos?limit=10')
            .then(res => res.json())
            .then(res => setList(res.todos));
    }, [])

    const filteredList = list.filter(todo => {
        if (filter === 'all') return true
        if (filter === 'completed')  return todo.completed === true
        if (filter === 'not_completed') return todo.completed === false
    })


    return (
        <div className="App">
            <TaskList list={filteredList}/>
            <TaskFilter list={filter} setFilter={setFilter}/>
        </div>
    );
};

export default App;