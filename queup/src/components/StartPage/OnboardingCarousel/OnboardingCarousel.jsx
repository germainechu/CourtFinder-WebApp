import React from 'react'
import { Carousel } from 'react-bootstrap'
import './OnboardingCarousel.css'

const OnboardingCarousel = () => {
  return (
    <div className="carousel-container">
    <Carousel variant="dark" indicators={true} controls={true} pause={'hover'} slide={false} interval={3000} fade={true}>
     
      <Carousel.Item>
        <img src='/assets/person1.png' alt="Tennis Girl" className="overlay-person1-image"/>
        <img
          className="d-block w-100"
          src="/assets/onboarding-background.png"
          alt="Respect The Queue"
        />
        <div className="text-right-container">
          <div className="carousel-container-right">
            <Carousel.Caption>
              <h3>Respect the Queue</h3>
              <p>Honor the virtual queue and wait your turn. We're a community, and everyone deserves a fair chance to play.</p>
            </Carousel.Caption>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <img src='/assets/person2.png' alt="Tennis Girl" className="overlay-person2-image"/>
        <img
          className="d-block w-100"
          src="/assets/onboarding-background.png"
          alt="Be Mindful of Time"
        />
         <Carousel.Caption>
          <h3>Be Mindful of Time</h3>
          <p>Keep an eye on the clock to ensure timely rotations. A little consideration goes a long way in making everyone's tennis experience fantastic.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='/assets/person3.png' alt="Tennis Girl" className="overlay-person3-image"/>
        <img
          className="d-block w-100"
          src="/assets/onboarding-background.png"
          alt="Third slide"
        />
         <Carousel.Caption>
          <h3>Communicate Openly</h3>
          <p>If you have a change in plans or need to leave the queue, let your fellow players know. Communication helps keep the tennis vibes positive.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default OnboardingCarousel
