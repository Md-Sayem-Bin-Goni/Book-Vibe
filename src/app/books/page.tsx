import BookCard from '@/components/shared/BookCard';
import { IBook } from '@/types/books.type';
import React from 'react';


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
            {/* Section Heading */}
            <div className="mb-10 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-500">
                    Our Collection
                </p>

                <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
                    Explore All Books
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-slate-500">
                    Discover amazing stories, timeless classics, and inspiring books from
                    talented authors.
                </p>
            </div>








            <div className='grid grid-cols-4 gap-20'>

                {

                    booksData.map((book: IBook, ind: number) => {
                        return <BookCard key={ind} book={book} />
                    })
                }
            </div>
        </section>
    );
};

export default Books;