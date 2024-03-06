import React from 'react';
import "./CourtFrameSP2.css";
import generateCourtArray from '../../../../utils/generateCourtArray';

const CourtFrameSP2 = ({selectButtonID, toggleColor}) => {
  const courtArray = generateCourtArray(4)

  return (
    <div>
       <div className="court-frame--top">
        {courtArray.slice(0,8).map((court) => (
            <button key={court.id} className={`court-button ${court.status} ${selectButtonID === court.id ?  "selected" : ` `}`} onClick={() => toggleColor(court.id)} >{court.id+1}</button>
        ))}
    </div>
    </div>
  )
}

export default CourtFrameSP2;
