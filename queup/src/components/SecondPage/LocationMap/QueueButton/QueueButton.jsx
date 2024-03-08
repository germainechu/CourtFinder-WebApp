import React, { useState } from 'react'
import "./QueueButton.css";
import QueueItem from '../QueueItem/QueueItem';


const QueueButton = () => {
    const [showQueueItem, setShowQueueItem] = useState(false)
    
    const handleClick = () => {
        setShowQueueItem(true)
    }
    return (
    <>
    <button className="queue-button" onClick={handleClick}>qup</button>
    {showQueueItem && <QueueItem/>}
    </>
  )
}

export default QueueButton;
