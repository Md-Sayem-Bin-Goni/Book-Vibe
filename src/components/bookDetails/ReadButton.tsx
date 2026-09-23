'use client'
import { BooksContext } from '@/contex/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';

const ReadButton = ({ book }: { book: IBook }) => {

    const { readBooks, setReadBooks } = useContext(BooksContext)


    const handleReadBook = () => {
        console.log("read button trigger", book);
        setReadBooks([...readBooks, book])
        alert(`You have read "${book.bookName}"`)
    }


    return (
        <div>
            <button
                className="btn btn-success text-white px-8 rounded-xl"
                onClick={handleReadBook}
            >
                Read
            </button>
        </div>
    );
};

export default ReadButton;