import MovieCard from '../components/MovieCard'
import {useState} from 'react'

function Home(){

    const [searchQuery, setSearchQuery] = useState('');

    const movies = [
        {
            id: 1,
            title: "Terminator",
            release_date: '2021'
        },
        {
            id: 2,
            title: "The Dark Knight",
            release_date: '2009'
        },
        {
            id: 3,
            title: "Transformers",
            release_date: '2008'
        }
    ]

    const handleSearchChange = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery('');
        }

    return (
        <div className="home-pg">
            <form onSubmit={handleSearchChange} className="search-form">
                <input
                    type="text" placeholder="Search for movie" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <button type="submit" className="sub-btn"> Search</button>

            </form>


            <div className="movie-list">
                {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard key={movie.id} movie={movie}/>)}
            </div>


        </div>
    )
}

export default Home;