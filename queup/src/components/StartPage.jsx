import React from 'react'
import WelcomeHeader from './StartPage/WelcomeHeader/WelcomeHeader';
import StartButton from './StartPage/StartButton/StartButton';
import PlayerCount from './StartPage/PlayerCount/PlayerCount';
import OnboardingCard from './StartPage/OnboardingCard/OnboardingCard';

const StartPage = () => {
    // place useState and useEffect functions here to handle routing
  return (
    <div>
      <WelcomeHeader></WelcomeHeader>
      <OnboardingCard></OnboardingCard>
      <StartButton></StartButton>
      <PlayerCount></PlayerCount>
    </div>
  )
}

export default StartPage
