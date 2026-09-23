import { IBook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';

const ListedBookCard = ({ book }: { book: IBook }) => {



    const {
        bookName,
        author,
        image,
        category,
        rating,

        review,
    } = book;




    return (
        <div className="card card-side bg-base-100 shadow-md border border-base-300 p-4 ">

            {/* Book Image */}
            <figure className="w-40 h-52 shrink-0 rounded-xl overflow-hidden bg-base-200">
                <Image
                    src={image}
                    width={300}
                    height={300}
                    alt={bookName}
                    className="w-full h-full object-cover"
                />
            </figure>

            {/* Book Information */}
            <div className="card-body py-2">
                <h2 className="card-title text-2xl font-bold">
                    {bookName}
                </h2>

                <p className="text-gray-500">
                    By: <span className="font-medium">{author}</span>
                </p>

                <div className="flex gap-2 my-2">
                    <span className="badge badge-outline">
                        {category}
                    </span>

                    <span className="badge badge-warning">
                        ⭐ {rating}
                    </span>
                </div>

                <p className="text-gray-600 line-clamp-2">
                    {review}
                </p>

                <div className="flex items-center justify-between mt-3">
                    <h3 className="text-xl font-bold">
                        ৳ 500
                    </h3>

                    <button className="btn btn-primary btn-sm">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListedBookCard;