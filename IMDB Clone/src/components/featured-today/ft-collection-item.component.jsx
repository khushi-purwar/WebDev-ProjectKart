import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const FTCollectionItem = ({
  backdrop_path,
  title,
  name,
  id,
  overview,
  poster_path,
}) => {
  return (
    <React.Fragment key={id}>
      <div className="carousel-images">
        <LazyLoadImage
          className="d-block carousel-img"
          src={`https://image.tmdb.org/t/p/w400${backdrop_path || poster_path}`}
          alt={title || name}
        />
      </div>
      <div className="featured-details">
        <span>{title || name}</span>
        <p>{overview}</p>
      </div>
    </React.Fragment>
  );
};

export default FTCollectionItem;
