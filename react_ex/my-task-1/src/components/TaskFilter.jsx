const TaskFilter = ({filter, setFilter}) => {
    return (
        <div>
            <button onClick={() => {
                filter = 'all'
                setFilter('all')
            }}>All
            </button>
            <button onClick={() => {
                filter = 'completed'
                setFilter('completed')
            }}>Completed
            </button>
            <button onClick={() =>[
                filter = 'not_completed',
                setFilter('not_completed')
            ]}>Not Completed
            </button>
        </div>
    );
};

export default TaskFilter;