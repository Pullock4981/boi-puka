import React from 'react';
import { useLoaderData, useParams } from 'react-router';

// "bookId": 1,
// "bookName": "The Great Gatsby",
// "author": "F. Scott Fitzgerald",
// "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
// "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
// "totalPages": 192,
// "rating": 4.5,
// "category": "Classic",
// "tags": ["Fiction", "Romance"],
// "publisher": "Scribner",
// "yearOfPublishing": 1925

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    // console.log(bookId);
    const data = useLoaderData();
    // console.log(data);
    const singleBook = data.find(book => book.bookId === id);
    // console.log(singleBook);
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = singleBook;
    return (
        <div className='flex flex-col lg:flex-row justify-between
         items-center gap-10 my-10 lg:px-32 md:px-16 px-4'>
            <div className='w-full lg:w-1/2 h-full lg:h-1/2'>
                <img src={image} className="object-cover rounded-2xl lg:h-1/3" alt="" />
            </div>
            <div className="w-full lg:w-1/2 h-full lg:h-1/2">
                    <h2 className="card-title">{bookName}</h2>

                    <p className=' mb-3'>
                        By : {author}
                    </p>
                    <hr className='border' />
                    <p className='my-2'>
                        {category}
                    </p>
                    <hr className='border' />

                    <p className='mt-3'><span className='font-semibold'>Review:</span> {review}</p>
                    <div className="flex justify-start items-center mb-3">
                        {
                            tags.map(tag => <div className="card-actions justify-start mt-2 px-4">
                                <div className="badge badge-outline text-green-600">{tag}</div>
                            </div>)
                        }
                    </div>
                    <hr className='border' />
                    <div className='mt-3'>
                        <p>
                            Number of Pages : {totalPages}
                        </p>
                        <p>
                            Publisher : {publisher}
                        </p>
                        <p>
                            Year of Publishing : {yearOfPublishing}
                        </p>
                        <p>
                            Rating : {rating}
                        </p>
                    </div>
                    <div className="card-actions justify-start mt-4">
                        <button className="btn bg-blue-200">Read</button>
                        <button className="btn bg-blue-200">Wishlist</button>
                    </div>
                </div>
        </div>
    );
};

export default BookDetails;