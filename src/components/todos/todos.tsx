import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function UserTodo() {
    const { id } = useParams();
    const [assignments, setAssignments] = useState<AssignmentInterface[]>([]);

    
    fetch(`https://jsonplaceholder.typicode.com/user/${id as unknown as string}/todos`)
    .then(res => res.json())
    .then(data => setAssignments(data as AssignmentInterface[]))
    .catch(err => console.log(err))

    return (
        <div>
            <h1>Todo</h1>
            <ul>
                {assignments.map((assignment) => (
                    <li key={assignment.id}>
                        <Link to={`/users/user_todo/${assignment.id}`}>{assignment.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}