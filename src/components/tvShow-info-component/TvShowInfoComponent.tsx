import "./TvShowInfoComponent.css";
import {type FC, useEffect} from "react";
import Rating from "../stars-rating-component/StarsRatingComponent.tsx";
import GenreBadgeComponent from "../genre-badge-component/GenreBadgeComponent.tsx";
import type {ITVShowDetails} from "../../models/series/ITvShowDetails.ts";

type TvShowPropsType = {
    tvShow: ITVShowDetails | null;
};

const TvShowInfoComponent: FC<TvShowPropsType> = ({tvShow}) => {
    const baseUrl = "https://image.tmdb.org/t/p/original";
    const logoBaseUrl = "https://image.tmdb.org/t/p/w200";

    if (!tvShow) {
        return <div className="loading-spinner">Loading tv show details...</div>;
    }

    const backdropSrc = tvShow.backdrop_path
        ? `${baseUrl}${tvShow.backdrop_path}`
        : "https://placehold.jp/333333/333333/1920x1080.png";

    const posterSrc = tvShow.poster_path
        ? `${baseUrl}${tvShow.poster_path}`
        : "https://placehold.jp/44/999999/ffffff/500x750.png?text=No+Poster";
    useEffect(() => {
        const elements = document.querySelectorAll('.layout-background, .content-island, main, .main-wrapper');

        elements.forEach(el => {
            if (el) (el as HTMLElement).style.background = 'transparent';
        });

        return () => {
            elements.forEach(el => {
                (el as HTMLElement).style.background = '';
            });
        };
    }, []);
    return (
        <div className="movie-details-container">
            <div
                className="movie-backdrop"
                style={{backgroundImage: `url(${backdropSrc})`}}
            />
            <div className="backdrop-overlay"/>
            <div className="movie-content">
                <div className="movie-poster-section">
                    <img
                        src={posterSrc}
                        alt={tvShow.name}
                        className="movie-info-poster"
                    />
                    {tvShow.homepage && (
                        <a href={tvShow.homepage} target="_blank" rel="noopener noreferrer" className="homepage-button">
                            Visit Official Site
                        </a>
                    )}
                </div>

                <div className="movie-text-details">
                    <div className="movie-header">
                        <h1 className="movie-title">{tvShow.name}</h1>
                        {tvShow.tagline && <p className="movie-tagline">"{tvShow.tagline}"</p>}
                    </div>

                    <div className="movie-meta-row">
                        <span className="meta-item year">
                           {tvShow.first_air_date ? tvShow.first_air_date.split('-')[0] : "N/A"}
                        </span>
                        <span className="meta-item adult">{tvShow.adult ? "18+" : "12+"}</span>
                        <span className="meta-item status">{tvShow.status}</span>
                        <div className="rating-flex">
                            <Rating rating={tvShow.vote_average / 2}/>
                            <span className="rating-num">{tvShow.vote_average.toFixed(1)}</span>
                            <span className="vote-count">({tvShow.vote_count} votes)</span>
                        </div>
                    </div>

                    <div className="genres-list">
                        {tvShow.genres.map(g => (
                            <GenreBadgeComponent g={g} key={g.id}/>
                        ))}
                    </div>

                    <div className="overview-block">
                        <h3>Overview</h3>
                        <p>{tvShow.overview}</p>
                    </div>

                    <div className="movie-info-grid">
                        <div className="grid-cell">
                            <span className="cell-label">Duration</span>
                            <span className="cell-value">{tvShow.episode_run_time && tvShow.episode_run_time.length > 0
                                ? `${tvShow.episode_run_time[0]} min`
                                : "N/A"}</span>
                        </div>
                        <div className="grid-cell">
                            <span className="cell-label">Seasons / Episodes</span>
                            <span className="cell-value">
                                 {tvShow.number_of_seasons} S / {tvShow.number_of_episodes}
                            </span>
                        </div>
                        <div className="grid-cell">
                            <span className="cell-label">Status</span>
                            <span className="cell-value">{tvShow.status}</span>
                        </div>
                        <div className="grid-cell">
                            <span className="cell-label">Language</span>
                            <span className="cell-value">{tvShow.original_language.toUpperCase()}</span>
                        </div>
                        <div className="grid-cell">
                            <span className="cell-label">Country</span>
                            <span className="cell-value">{tvShow.production_countries[0]?.name || "N/A"}</span>
                        </div>
                    </div>

                    <div className="production-section">
                        <h4>Production Companies</h4>
                        <div className="company-logos-row">
                            {tvShow.production_companies?.map(company => (
                                company.logo_path ? (
                                    <img
                                        key={company.id}
                                        src={`${logoBaseUrl}${company.logo_path}`}
                                        alt={company.name}
                                        title={company.name}
                                        className="company-logo-img"
                                    />
                                ) : (
                                    <span key={company.id} className="company-text-only">
                    {company.name}
                </span>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TvShowInfoComponent;