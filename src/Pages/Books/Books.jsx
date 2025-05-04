import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {

    // const [allBooks, setAllBooks] = useState([]);
    // load book data by use effect
    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setAllBooks(data);
    //         })
    //         // .catch(err => console.log(err))
    // },[])

    // load data by use promise
    // const bookPromise = fetch("booksData.json").then(res => res.json())
    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-10'>
                Books
            </h1>
            <Suspense fallback={<div className='text-center text-3xl font-bold'>Loading...</div>}>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-10 lg:px-32 md:px-16 px-4'>
                    {
                        data.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;