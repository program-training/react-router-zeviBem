import { useState } from "react";
import { useParams } from "react-router-dom";

export default function MoreDetails() {
    const { id } = useParams();
    const [details, setDetails] = useState<AssignmentInterface>();

    fetch(`https://jsonplaceholder.typicode.com/todos/${id as string}`)
    .then((response) => response.json())
    .then((data) => { setDetails(data as AssignmentInterface) })
    .catch((err) => console.log(err));

    return (
        <div>
            <h2>Details Information</h2>
            <p>
                <b>User ID:</b>{details?.userId}
            </p>

            <p>
                <b>Assignment:</b> {details?.title}
            </p>

            <p>
                {details?.completed ? 'Complete' : 'Not complete'}
            </p>
        </div>
    );
}