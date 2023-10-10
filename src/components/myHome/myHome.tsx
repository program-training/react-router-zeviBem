import { useNavigate } from "react-router-dom";

export default function Home() {
    const myNav = useNavigate();

    return (
        <>
            <button onClick={() => myNav("/users/allUsers")}>Users</button>
            <button onClick={()=> myNav('/users/title')}>Products</button>
        </>
    )
}