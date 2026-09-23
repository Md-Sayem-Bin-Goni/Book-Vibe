'use client'
import { BooksContext } from '@/contex/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';

const ReadButton = ({ book }: { book: IBook }) => {

    const { wishList, setWishList } = useContext(BooksContext)


    const handleReadBook = () => {
        console.log("WishList button trigger", book);
        setWishList([...wishList, book])
        toast.success(`You have added "${book.bookName}" to wishlist`)
    }


    return (
        <div>
            <button
                className="btn btn-success text-white px-8 rounded-xl"
                onClick={handleReadBook}
            >
                Add to wishlist
            </button>
        </div>
    );
};

export default ReadButton;