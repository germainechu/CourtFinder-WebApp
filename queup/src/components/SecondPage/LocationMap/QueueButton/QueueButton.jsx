import React, { useState } from 'react'
import "./QueueButton.css";
import QueueInfo from './QueueInfo/QueueInfo';
import CourtInfo from './CourtInfo/CourtInfo';


const QueueButton = () => {
    const [showQueueItem, setShowQueueItem] = useState(false)
    
    const handleClick = () => {
        setShowQueueItem(true)
    }

    //TODO: switch between QueueInfo and CourtInfo depending on:
    // 1. CourtInfo <= if timer == 0 && user is in Queue && head(Courts) is RETURNED. 
    // 2. QueueInfo <= is user timer is still running || head(Courts) NOT RETURNED.
    
    
    return (
    <>
    {showQueueItem && <QueueInfo/>}
    {/* {showQueueItem && <CourtInfo/>} */}
    <button className="queue-button" onClick={handleClick}>qup</button>
    
    
    </>
  )
}

export default QueueButton;
