import React from 'react'

const BookCard = ({ book }) => {
    const imgUrl = new URL(`../assets/${book.image}`, import.meta.url).href;
    return (
        <div className='card w-[22vw] h-[60vh] bg-slate-200 shadow-xl p-4 rounded-xl flex flex-col hover:transform hover:scale-105 transition-all ease-in-out duration-300'>
            <div className="CoverImage h-[60%] m-auto">
                <img src={imgUrl} alt={book.image} />
            </div>
            <div className='card-body w-[90%] m-auto'>
                <span className="text-xs bg-slate-700 text-white px-2 p-1 rounded-full shadow-lg shadow-slate-300">{book.category}</span>
                <h2 className='card-title text-xl font-bold mt-1'>{book.name}</h2>
                <p className='card-desc text-sm text-justify mt-2 line-clamp-2'>{book.desc}</p>
                <div className='flex justify-between my-4 items-center self-end'>
                    <h2 className='mx-2 font-semibold text-lg'>₹ {book.price}</h2>
                    <button className='bg-blue-600 p-1 px-2 rounded-xl text-white hover:bg-blue-800 active:bg-blue-900'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default BookCard