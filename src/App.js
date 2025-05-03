import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ListBookForm from './Components/ListBookForm';
import FindBooks from './Components/FindBooks';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/list">List a Book</Link>
                        </li>
                        <li>
                            <Link to="/find">Find Books</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/list" element={<ListBookForm />} />
                    <Route path="/find" element={<FindBooks />} />
                    <Route path="/" element={
                        <div>
                            <h2>Welcome to the Textbook Exchange</h2>
                            <p>Please use the links above to list or find books.</p>
                        </div>
                    } />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
