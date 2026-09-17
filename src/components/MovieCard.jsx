function MovieCard({ movie}){

    function onFavoriteClick(){
        alert('You clicked on the fav button');
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title}/>
                <div className="fav-btn">
                    <button className="favorite-btn" onClick={onFavoriteClick}>heart</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard;
