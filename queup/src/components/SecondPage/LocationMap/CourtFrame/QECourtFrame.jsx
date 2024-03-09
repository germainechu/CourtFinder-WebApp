import React from 'react';
import './QECourtFrame.css';
import generateCourtArray from '../../../../utils/generateCourtArray';

const QECourtFrame = ({selectButtonID, toggleColor}) => {
    const courtArray = generateCourtArray(16)
    
  return (
    <>
    <div className="court-frame--top">
        {courtArray.slice(0,8).map((court) => (
            <button key={court.id} className={`court-button ${court.status} ${selectButtonID === court.id ?  "selected" : ` `}`} onClick={() => toggleColor(court.id)} >{court.id+1}</button>
        ))}
    </div>
    <div className="court-frame--bottom">
    {courtArray.slice(8,16).map((court) => (
        <button key={court.id} className={`court-button ${court.status} ${selectButtonID === court.id ?  "selected" : ` `} court-button--rotated`}  onClick={() => toggleColor(court.id)} >{court.id+1}</button>
    ))}
</div>
</>
  );
};

export default QECourtFrame;
