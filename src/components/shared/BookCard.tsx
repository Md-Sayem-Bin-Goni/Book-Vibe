import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IbookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IbookCardProps) => {

  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
  } = book;

  return (
    <div
      className="group bg-white border border-gray-200 rounded-2xl p-5
      hover:shadow-xl hover:-translate-y-1
      transition-all duration-300"
    >

      {/* Book Image */}
      <div className="bg-gray-100 rounded-xl p-6 flex justify-center overflow-hidden">
        <Image
          src={image}
          alt={bookName}
          width={180}
          height={250}
          className="h-[250px] w-auto object-contain
          group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Tags */}
      <div className="flex gap-2 mt-5 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-green-50 text-green-600 px-3 py-1
            rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Name */}
      <h2 className="text-xl font-bold text-gray-900 mt-4">
        {bookName}
      </h2>

      {/* Author */}
      <p className="text-gray-500 mt-2">
        By : <span className="font-medium">{author}</span>
      </p>

      <div className="border-t border-dashed border-gray-200 my-4"></div>

      {/* Bottom Info */}
      <div className="flex items-center justify-between text-sm">

        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
          {category}
        </span>

        <div className="flex items-center gap-1 font-medium">
          <span>{rating}</span>
          <span className="text-yellow-500">★</span>
        </div>

      </div>

      {/* Year */}
      <p className="text-xs text-gray-400 mt-4">
        Published in {yearOfPublishing}
      </p>

      {/* View Details Button */}
      <Link
        href={`/books/${bookId}`}
        className="btn btn-success text-white w-full mt-5 rounded-xl"
      >
        View Details
      </Link>

    </div>
  );
};

export default BookCard;