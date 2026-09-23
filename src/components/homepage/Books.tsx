import { IBook } from '@/types/books.type';
import { Calligraffitti } from 'next/font/google';
import React from 'react';
import BookCard from '../shared/BookCard';

const getBooks = async () => {
    const res = await fetch('http://localhost:3000/booksData.json')
    const data = res.json()
    return data;
}

const Books = async () => {

    const booksData = await getBooks();
    console.log(booksData, "booksData");
    return (
        <section className='container mx-auto my-[70px]'>
            <h2 className='font-bold text-5xl text-center pb-10'>Books</h2>

            <div className='grid grid-cols-3 gap-20'>
                {
                    booksData.map((book: IBook ,ind : number )=> {
                        return <BookCard key ={ind} book={book}/>
                    })
                }
            </div>
        </section>
    );
};

export default Books;