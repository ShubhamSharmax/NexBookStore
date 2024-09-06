import React from 'react'

const BookCard = ({ book }) => {
    console.log(book)
    const imgUrl = new URL(`../assets/${book.image}`, import.meta.url).href;
    return (
        <div className='card w-[75%] bg-gray-200 shadow-xl p-4  rounded-xl' key={'main'}>
            <div className="CoverImage h-[60%] m-auto">
                <img src={imgUrl} alt={book.image} />
            </div>
            <div className='card-body w-[90%] m-auto'>
                <span className="text-sm border-2 border-gray-400 px-2 rounded-full">{book.category}</span>
                <h2 className='card-title text-xl font-bold'>{book.name}</h2>
                <p className='card-desc text-sm text-justify mt-2'>{book.desc}</p>
                <div className='flex justify-between my-4 items-center'>
                    <h2 className='mx-2 font-semibold text-lg'>₹ {book.price}</h2>
                    <button className='bg-gray-500 p-1 px-2 rounded-xl text-white'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default BookCard