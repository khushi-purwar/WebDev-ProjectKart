import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Container from 'react-bootstrap/Container';

import { fetchDataStart } from '../../redux/movies/movies.actions';
import { selectFanFavoritesCollections } from '../../redux/movies/movies.selectors';

import CarouselContainer from '../carousel/carousel.component';
import { useWindowSize } from '../../redux/movies/movies.utils';
import FFCollectionItem from './ff-collection-item.component';

const numberOfSlidesToSlide = (width) => {
  if (width < 600) {
    return 2;
  } else if (width > 600 && width < 780) {
    return 4;
  } else {
    return 6;
  }
};
const FanFavourites = ({ fetchDataStart, collections }) => {
  const [windowWidth] = useWindowSize();

  useEffect(() => {
    fetchDataStart(`/movie/popular`);
  }, [fetchDataStart]);

  return (
    <div className="fan-favorites-container">
      <Container>
        <h3 className="title">What to watch</h3>
      </Container>
      <div className="main-container">
        <Container>
          <h3 className="sub-title">Fan Favorites</h3>
          <span className="sub-title__desc">
            This week's most popular fan movies
          </span>
          <CarouselContainer
            desktop={6}
            slidesToSlide={numberOfSlidesToSlide(windowWidth)}
            tablet={4}
            laptop={5}
            mobile={2}
          >
            {!!collections &&
              collections.map((collectionItem, i) => (
                <FFCollectionItem collectionItem={collectionItem} key={i} />
              ))}
          </CarouselContainer>
        </Container>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectFanFavoritesCollections,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataStart: (url) => dispatch(fetchDataStart(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FanFavourites);
