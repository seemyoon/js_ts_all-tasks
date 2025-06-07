const TaskList = ({list}) => {
    return (
        <ul>
            {list.map(p => (
                <li key={p.id}>
                    <strong>id:</strong> {p.id} <br />
                    <strong>todo:</strong> {p.todo} <br />
                    <strong>completed:</strong> {p.completed ? "Yes" : "No"} <br />
                    <strong>userId:</strong> {p.userId}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;