import React from "react";

export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;
    return (
      <div className="movie-view">
        <div className='movie-poster'>
          <img src={movie.coverUrl} />
        </div>
        <div className='movie-title'>
          <span className='label'> Title: </span>
          <span className='value'>{movie.Title}</span>
        </div>
        <div className='movie-author'>
          <span className='label'> Author: </span>
          <span className='value'>{movie.author}</span>
        </div>
        <div className='movie-illustrator'>
          <span className='label'> Illustrator: </span>
          <span className='value'>{movie.illustrator}</span>
        </div>
        <div className='movie-releaseYear'>
          <span className='label'> ReleaseYear: </span>
          <span className='value'>{movie.releaseYear}</span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>
      </div>
    );
  }
}
