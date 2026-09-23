'use client'
import ListedBookCard from '@/components/shared/ListedBookCard';
import React, { useContext } from 'react';
import { BooksContext } from "@/contex/BooksContext";


const ListedBooks = () => {

    const { readBooks, wishList } = useContext(BooksContext);

    console.log(readBooks, wishList, "Read books");

    return (
        <div className='container mx-auto'>
            <div className='bg-slate-300 rounded-3xl mb-10'>
                <h2 className='text-3xl py-10 font-bold text-center'>Listed Books</h2>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books  (${readBooks.length})`} />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className='mb-10'>
                        {
                            readBooks.map(book => {
                                return <ListedBookCard key={book.bookId} book={book} />

                            })
                        }
                    </div>


                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label={` WishList Books  (${wishList.length})`} defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                  
                  
                    <div className='mb-10'>
                        {
                            readBooks.map(book => {
                                return <ListedBookCard key={book.bookId} book={book} />

                            })
                        }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ListedBooks;