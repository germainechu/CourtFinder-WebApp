import React from "react";
import { Carousel } from "react-bootstrap";
import "./OnboardingCarousel.css";

const OnboardingCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        variant="dark"
        indicators={true}
        controls={false}
        pause={"hover"}
        slide={false}
        touch={true}
        interval={3000}
        fade={true}
      >
        <Carousel.Item>
          <div className="carousel-item-container--one">
            <img
              src="/assets/person1.svg"
              alt="Tennis Girl"
              className="overlay-person1-image"
            />
            <Carousel.Caption className="carousel-container-caption--one">
              <h3 className="carousel-container-caption--h3">
                Respect the Queue
              </h3>
              <p className="carousel-container-caption--p">
                Honor the virtual queue and wait your turn. We're a community,
                and everyone deserves a fair chance to play.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-container--two">
            <img
              src="/assets/person2.svg"
              alt="Tennis Girl"
              className="overlay-person2-image"
            />
            <Carousel.Caption className="carousel-container-caption--two">
              <h3 className="carousel-container-caption--h3wide">
                Be Mindful of Time
              </h3>
              <p className="carousel-container-caption--pwide">
                Keep an eye on the clock to ensure timely rotations. A little
                consideration goes a long way in making everyone's tennis
                experience fantastic.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carousel-item-container--three">
      <img src='/assets/person3-1.svg' alt="Tennis Girl" className="overlay-person3-1-image"/>
      {/* <img src='/assets/person3-2.svg' alt="Tennis Boy" className="overlay-person3-2-image"/> */}
         <Carousel.Caption className="carousel-container-caption--three">
          <h3 className='carousel-container-caption--h3'>Communicate Openly</h3>
          <p className='carousel-container-caption--p'>If you have a change in plans or need to leave the queue, let your fellow players know. Communication helps keep the tennis vibes positive.</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default OnboardingCarousel;
