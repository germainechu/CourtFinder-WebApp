import React from 'react';
import "./SP2CourtFrame.css";
import generateCourtArray from '../../../../utils/generateCourtArray';

const SP2CourtFrame = ({ selectButtonID, toggleColor }) => {
  const MAX_COURTS = 4
  const courtArray = generateCourtArray(MAX_COURTS)

  return (
    <div>
       <div className="SP2-court-frame--top">
        {courtArray.slice(0,8).map((court) => (
            <button key={court.id} className={`court-button ${court.status} ${selectButtonID === court.id ?  "selected" : ` `}`} onClick={() => toggleColor(court.id)} >{court.id+1}</button>
        ))}
    </div>
    </div>
  )
}

export default SP2CourtFrame;
