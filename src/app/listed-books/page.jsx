'use client'

import React, { useContext } from 'react';
import { BooksContext } from "@/contex/BooksContext";

const ListedBooks = () => {

    const { readBooks } = useContext(BooksContext);

    console.log(readBooks, "Read books");

    return (
        <div>
            Listed Books
        </div>
    );
};

export default ListedBooks;