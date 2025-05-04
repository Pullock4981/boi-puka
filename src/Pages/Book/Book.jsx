// import React, { use } from 'react';

import { Link } from "react-router";

const Book = ({ singleBook }) => {
    // const book = use(bookPromise);
    // console.log(book);
    console.log(singleBook);
    const { bookName, author, category, rating, image, tags, yearOfPublishing,bookId } = singleBook;

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
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card border-2 border-gray-300  rounded-lg">
                <figure className=" bg-gray-300 m-4">
                    <img
                        src={image}
                        className="h-60 object-cover p-7 rounded-2xl"
                        alt="Shoes" />
                </figure>
                <div className="flex justify-start items-center">
                    {
                        tags.map(tag => <div className="card-actions justify-start mt-2 px-4">
                            <div className="badge badge-outline text-green-600">{tag}</div>
                        </div>)
                    }
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>by : {author}</p>
                    <hr className="border border-dashed mt-2" />
                    <div className="flex justify-between mt-2 w-full">
                        <p >{category}</p>
                        <p className='flex justify-end'>Rating: {rating}</p>
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default Book;