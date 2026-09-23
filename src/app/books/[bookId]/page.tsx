import ReadButton from "@/components/bookDetails/ReadButton";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface IBookDetailPage {
  params: Promise<{
    bookId: string;
  }>;
}

const getBooks = async (): Promise<IBook[]> => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

const BookDetailPage = async ({ params }: IBookDetailPage) => {
  const { bookId } = await params;

  const bookData = await getBooks();

  const book = bookData.find(
    (book: IBook) => book.bookId === Number(bookId)
  );

  if (!book) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      <section className="container mx-auto px-4 py-10 md:py-16">

        {/* Back Button */}
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition mb-8"
        >
          <span>←</span>
          Back to Books
        </Link>

        {/* Main Book Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left - Book Image */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">

              <div className="bg-slate-100 rounded-2xl p-8 flex items-center justify-center min-h-[450px]">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  width={300}
                  height={430}
                  priority
                  className="max-h-[430px] w-auto object-contain rounded-lg shadow-2xl"
                />
              </div>

            </div>
          </div>

          {/* Right - Book Information */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Category */}
            <div className="mb-4">
              <span className="inline-block bg-emerald-50 text-emerald-700 font-medium text-sm px-4 py-2 rounded-full">
                {book.category}
              </span>
            </div>

            {/* Book Name */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {book.bookName}
            </h1>

            {/* Author */}
            <p className="text-lg text-gray-500 mt-4">
              By{" "}
              <span className="text-gray-800 font-semibold">
                {book.author}
              </span>
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-6">

              <div className="flex text-yellow-400 text-xl">
                ★★★★★
              </div>

              <span className="font-bold text-gray-800">
                {book.rating}
              </span>

              <span className="text-gray-400">
                / 5
              </span>

            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-7" />

            {/* Review */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                About this book
              </h2>

              <p className="text-gray-600 leading-8">
                {book.review}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-7">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Book Information Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">

              <div className="bg-white border border-gray-200 rounded-2xl p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Pages
                </p>
                <p className="font-bold text-gray-800 mt-1">
                  {book.totalPages}
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Published
                </p>
                <p className="font-bold text-gray-800 mt-1">
                  {book.yearOfPublishing}
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Publisher
                </p>
                <p className="font-bold text-gray-800 mt-1 truncate">
                  {book.publisher}
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Rating
                </p>
                <p className="font-bold text-gray-800 mt-1">
                  ⭐ {book.rating}
                </p>
              </div>

            </div>











            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">

            <ReadButton book={book}/>

              <Link
                href="/books"
                className="btn btn-outline px-8 rounded-xl"
              >
                Wishlist
              </Link>








            </div>

          </div>
        </div>

      </section>
    </main>
  );
};

export default BookDetailPage;