import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import moviesData from './movies.json'; // Import the JSON file
import './App.css'; // Add this line at the top of your App.js

function App() {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState('');
    const [rate, setRate] = useState('');
    const [newMovie, setNewMovie] = useState({ title: '', rating: '' }); // State for new movie input

    useEffect(() => {
        setMovies(moviesData); // Set the initial movies state from the JSON data
    }, []);

    const addMovie = (newMovie) => {
        setMovies([...movies, newMovie]);
    };

    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rate ? movie.rating >= rate : true)
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMovie({ ...newMovie, [name]: value }); // Update newMovie state
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (newMovie.title && newMovie.rating) { // Check if title and rating are provided
            addMovie(newMovie); // Add the new movie
            setNewMovie({ title: '', rating: '' }); // Reset the input fields
        }
    };

    return (
        <div className="app">
            <h1>Movie App</h1>
                        {/* Form to add a new movie */}
                        <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Movie Title"
                    value={newMovie.title}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    value={newMovie.rating}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Add Movie</button>
            </form>
            {/* ... existing code ... */}

            <Filter title={title} rate={rate} setTitle={setTitle} setRate={setRate} />
            <MovieList movies={filteredMovies} />
        </div>
    );
}

export default App;
