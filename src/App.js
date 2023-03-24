import { useState, useEffect } from 'react';
import './App.css';

// https://api.themoviedb.org/3/movie/popular?api_key=83cb5904bd2f84699c28a99d9d4a0289&language=en-US&include_image_language=en,jp,uk,null

function App() {
    const [popular, setPopular] = useState([]);
    const [years, setYears] = useState([]);
    const [genres, setGenres] = useState([]);

    const getPopular = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=83cb5904bd2f84699c28a99d9d4a0289&append_to_response=videos,images`
        );
        const popular = await response.json();
        setPopular(popular.results);
        console.log(popular.results);
    };

    const getByYears = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=83cb5904bd2f84699c28a99d9d4a0289&primary_release_date.gte=1990-01-01&primary_release_date.lte=1990-12-31`
        );
        const byYears = await response.json();
        setYears(byYears.results);
        console.log(byYears.results);
    };

    const getGenres = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=83cb5904bd2f84699c28a99d9d4a0289`
        );
        const genres = await response.json();
        setGenres(genres.genres);
        console.log(genres);
    };

    useEffect(() => {
        getPopular();
        getByYears();
        getGenres();
    }, []);

    return (
        <div className='text-xl'>
            <h2>
                <b>Popular</b>
            </h2>
            <ul>
                {popular.map((movie) => (
                    <li key={movie.id}>{movie.original_title}</li>
                ))}
            </ul>
            <h2>
                <b>By Years</b>
            </h2>
            <ul>
                {years.map((movie) => (
                    <li key={movie.id}>{movie.original_title}</li>
                ))}
            </ul>
            <br />
            <br />
            <h2>
                <b>Genres</b>
            </h2>
            <ul>
                {genres.map((genre) => (
                    <li key={genre.id}>{`${genre.id}: ${genre.name}`}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
