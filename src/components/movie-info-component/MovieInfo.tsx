import "./MovieInfo.css";
import {type FC} from "react";
import type {IMovieDetails} from "../../models/movie/MovieDetails.ts";
import Rating from "../stars-rating-component/StarsRating.tsx";
import GenreBadge from "../genre-badge-component/GenreBadge.tsx";

type MoviePropsType = {
    movie: IMovieDetails | null;
};

const MovieInfo: FC<MoviePropsType> = ({movie}) => {
    const baseUrl = "https://image.tmdb.org/t/p/original";
    const logoBaseUrl = "https://image.tmdb.org/t/p/w200";
    console.log(movie)
    if (!movie) {
        return <div className="loading-spinner">Loading movie details...</div>;
    }

    const backdropSrc = movie.backdrop_path
        ? `${baseUrl}${movie.backdrop_path}`
        : "https://placehold.jp/333333/333333/1920x1080.png"

    const posterSrc = movie.poster_path
        ? `${baseUrl}${movie.poster_path}`
        : "https://placehold.jp/44/999999/ffffff/500x750.png?text=No+Poster";

    return (
        <div className="movie-details-container">

            <div
                className="movie-backdrop"
                style={{backgroundImage: `url(${backdropSrc})`}}
            >
                <div className="backdrop-overlay"></div>
            </div>

            <div className="movie-content">
                <div className="movie-poster-section">
                    <img
                        src={`${posterSrc}`}
                        alt={movie.title}
                        className="movie-info-poster"
                    />
                    {movie.homepage && (
                        <a href={movie.homepage} target="_blank" rel="noreferrer" className="homepage-button">
                            Visit Official Site
                        </a>
                    )}
                </div>

                <div className="movie-text-details">
                    <div className="movie-header">
                        <h1 className="movie-title">{movie.title}</h1>
                        {movie.tagline && <p className="movie-tagline">"{movie.tagline}"</p>}
                    </div>

                    <div className="movie-meta-row">
                        <span className="meta-item year">{movie.release_date.split('-')[0]}</span>
                        <span className="meta-item adult">{movie.adult ? "18+" : "12+"}</span>
                        <span className="meta-item status">{movie.status}</span>
                        <div className="rating-flex">
                            <Rating rating={movie.vote_average / 2}/>
                            <span className="rating-num">{movie.vote_average.toFixed(1)}</span>
                            <span className="vote-count">({movie.vote_count} votes)</span>
                        </div>
                    </div>

                    <div className="genres-list">
                        {movie.genres.map(g => (
                            <GenreBadge g={g} key={g.id}/>
                        ))}
                    </div>

                    <div className="overview-block">
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                    </div>

                    <div className="movie-info-grid">
                        <div className="grid-cell">
                            <span className="cell-label">Duration</span>
                            <span className="cell-value">{movie.runtime} min</span>
                        </div>
                        <div className="grid-cell">
                            <span className="cell-label">Budget</span>
                            <span className="cell-value">${movie.budget.toLocaleString()}</span>
                        </div>
                        <div className="grid-cell">
                            <span className="cell-label">Revenue</span>
                            <span className="cell-value">${movie.revenue.toLocaleString()}</span>
                        </div>
                        <div className="grid-cell">
                            <span className="cell-label">Language</span>
                            <span className="cell-value">{movie.original_language.toUpperCase()}</span>
                        </div>
                        <div className="grid-cell">
                            <span className="cell-label">Country</span>
                            <span className="cell-value">{movie.production_countries[0]?.name || "N/A"}</span>
                        </div>
                    </div>

                    <div className="production-section">
                        <h4>Production Companies</h4>
                        <div className="company-logos-row">
                            {movie.production_companies.map(company => (
                                company.logo_path ? (
                                    <img
                                        key={company.id}
                                        src={`${logoBaseUrl}${company.logo_path}`}
                                        alt={company.name}
                                        title={company.name}
                                        className="company-logo-img"
                                    />
                                ) : (
                                    <span key={company.id} className="company-text-only">{company.name}</span>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;