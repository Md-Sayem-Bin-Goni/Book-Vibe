import React from "react";
import bannerImg from "@/asset/bookImg.jpg";
import Image from "next/image";

const BannerPage = () => {
  return (
    <section className="container mx-auto px-4 py-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 bg-gradient-to-br from-slate-50 via-white to-emerald-50 rounded-3xl px-6 py-10 md:px-12 lg:px-20 lg:py-16 shadow-sm border border-slate-100">

        {/* Left Content */}
        <div className="text-center lg:text-left">
          <span className="inline-block px-4 py-2 mb-5 text-sm font-semibold text-emerald-700 bg-emerald-100 rounded-full">
            📚 Discover Your Next Read
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            Books to freshen up
            <span className="block text-emerald-600">
              your bookshelf
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Explore a handpicked collection of books that inspire,
            entertain, and bring fresh ideas to your everyday reading.
          </p>

          <div className="mt-8">
            <button className="btn btn-success px-8 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              View the list
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-emerald-100 rounded-3xl rotate-3"></div>

            <Image
              src={bannerImg}
              alt="Collection of books"
              priority
              className="relative w-full max-w-[480px] h-auto rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default BannerPage;