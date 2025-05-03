import React, { useState } from 'react';

const ListBookForm = () => {
    const [isbn, setIsbn] = useState('');
    const [title, setTitle] = useState('');
    const [course, setCourse] = useState('');
    const [price, setPrice] = useState('');
    const [sellerEmail, setSellerEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('Submitting...');

        const listingData = {
            isbn,
            title,
            course,
            price: parseFloat(price), //  Ensure price is a number
            sellerEmail,
        };

        try {
            const response = await fetch('/api/AddListing', { //  Azure Function endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(listingData),
            });

            if (response.ok) {
                setMessage('Book listed successfully!');
                setIsbn('');
                setTitle('');
                setCourse('');
                setPrice('');
                setSellerEmail('');
            } else {
                const errorText = await response.text();
                setMessage(`Error: ${response.status} - ${errorText}`);
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>List a Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ISBN:</label>
                    <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
                </div>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Course:</label>
                    <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} required />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={sellerEmail} onChange={(e) => setSellerEmail(e.target.value)} required />
                </div>
                <button type="submit">List Book</button>
                <p>{message}</p>
            </form>
        </div>
    );
};

export default ListBookForm;