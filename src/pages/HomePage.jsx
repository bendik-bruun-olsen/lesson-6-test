import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
        <h1>Welcome</h1>
        <Link to="/books">Go to list of books</Link>
        {/* <h3>{JSON.stringify(import.meta.env)}</h3> */}
        </>
    )
}

export default HomePage;