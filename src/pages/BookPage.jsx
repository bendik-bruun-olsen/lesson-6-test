import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BookPage() {
    const { bookId } = useParams();
    const [bookData, setBookData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://gutendex.com/books/${bookId}`)
            setBookData(result.data)
            console.log(result.data);
        }
    fetchData(); 
    }, [])
    return (
        <>
        <h1>{bookData?.title}</h1>
        <div>
        <h2>Author:</h2>
            {bookData?.authors.map((author, i) => <p key={i}>{author.name}</p>)}
        </div>
        <h3>Book id: {bookData.id}</h3>
        <h3>Download count: {bookData.download_count}</h3>
        </>
    )
}

export default BookPage;