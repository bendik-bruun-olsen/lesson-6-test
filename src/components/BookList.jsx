import { Link } from "react-router-dom";


function BookList ({data}) {
    return (
    <div>
        <h1>Book list page!</h1>
        <ol>
            {data?.map((book) => {
                return (
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`}>{book.title}</Link>
                    </li>
                ) 
            })}
        </ol>
    </div>
    )
}

export default BookList;