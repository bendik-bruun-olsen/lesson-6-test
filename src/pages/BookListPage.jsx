import { useEffect, useState } from "react";
import axios from "axios";
import BookList from "../components/BookList";
import NotFoundPage from "./NotFoundPage";
import Spinner from "../components/Spinner";

function BookListPage() {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const result = await axios(import.meta.env.VITE_API_URL);
                setData(result.data.results);
                setIsLoading(false);
            } catch (error) {
                setError(error.message)
                // console.error("Error: ", error.message)
            }
        };
        fetchData();
    }, [])
    
    // return (
        //     <BookList data={data}/>
        // )
        
        // return <>{error ? <h1>OH NO!</h1> : isLoading ? <h1>LOADING...</h1> : <BookList data={data}/>}</>
        
        if (error) return <NotFoundPage error={error}/>;
        if (isLoading) return <Spinner type="spinningBubbles" color="white" />;


        
    return (
        <>
            <BookList data={data}/>
        </>
    )
}

export default BookListPage;