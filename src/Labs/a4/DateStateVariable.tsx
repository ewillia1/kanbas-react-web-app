import React, { useState } from "react";

function DateStateVariable() {
    const [startDate, setStartDate] = useState(new Date());
    const dateObjectToHtmlDateString = (date: Date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${date.getMonth() + 1}-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
    };
    
    return (
        <div>
            <h3>Date State Variables</h3>
            <h4>{JSON.stringify(startDate)}</h4>
            <h4>{dateObjectToHtmlDateString(startDate)}</h4>
            <input className="form-control" type="date" value={dateObjectToHtmlDateString(startDate)} onChange={(e) => setStartDate(new Date(e.target.value))}/>
        </div>
    );
}
export default DateStateVariable;