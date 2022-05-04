import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselContainer = (props) => {
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={2000}
        centerMode={false}
        draggable
        focusOnSelect={false}
        infinite={false}
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: props.desktop,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: props.mobile || 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 768,
              min: 464,
            },
            items: props.tablet || 2,
            partialVisibilityGutter: 30,
          },
          laptop: {
            breakpoint: {
              max: 1024,
              min: 780,
            },
            items: props.laptop || 4,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        slidesToSlide={props.slidesToSlide}
        swipeable
      >
        {props.children}
      </Carousel>
    </>
  );
};

export default CarouselContainer;
