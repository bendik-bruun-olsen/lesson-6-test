import { Link } from "react-router-dom";

function NotFoundPage({msg, error}) {
    console.log(error);
    return (
        <>
        <h1>{msg}</h1>
        <h1>{error}</h1>
        <Link to="/">Return</Link>
        </>
    )
}
export default NotFoundPage;