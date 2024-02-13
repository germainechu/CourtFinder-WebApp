import React from 'react'
import WelcomeHeader from './StartPage/WelcomeHeader/WelcomeHeader';
import StartButton from './StartPage/StartButton/StartButton';
import PlayerCount from './StartPage/PlayerCount/PlayerCount';
import OnboardingCard from './StartPage/OnboardingCarousel/OnboardingCarousel';
import OnboardingCarousel from './StartPage/OnboardingCarousel/OnboardingCarousel';

const StartPage = () => {
    // place useState and useEffect functions here to handle routing
  return (
    <div>
      <WelcomeHeader></WelcomeHeader>
      
      <OnboardingCarousel></OnboardingCarousel>
      
      <PlayerCount></PlayerCount>

      <StartButton></StartButton>
    </div>
  )
}

export default StartPage
