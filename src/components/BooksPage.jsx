import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BooksPage = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const getBooks = async () => {
            try {
                const apiUrl = import.meta.env.VITE_BACKEND_URL;
                const response = await axios.get(`${apiUrl}/books`);
                setBooks(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getBooks();
    }, []);

    return (
        <div className="w-[98vw] min-h-[90vh] m-auto mt-16 p-5 mb-5">
            <div className="flex flex-wrap gap-y-12 m-auto justify-evenly items-center">
                {books.map((e) => (
                    <div key={e.id} > <BookCard book={e} /> </div>
                ))}
            </div>
        </div>

    )
}

export default BooksPage