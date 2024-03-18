export function availableText(quiz) {
    let today = new Date();
    let partsA = quiz.availableFromDate.split('-');
    let availableDate = new Date(partsA[0], partsA[1] - 1, partsA[2]);
    let partsB = quiz.untilDate.split('-');
    let availableUntilDate = new Date(partsB[0], partsB[1] - 1, partsB[2]);

    if (availableUntilDate < today) {       // If Available Until Date is before today. CLOSED.
        return 1;
    } else if (today < availableDate) {        // If current date is before Available from Date. NOT AVAILABLE UNTIL.
        return 2;
    } else if (availableDate < today && today < availableUntilDate) {    // If current date is between Available Date and Available Until Date. AVAILABLE.
        return 3;
    } else {                            // This should never be reached.
        return 4;
    }
}

export function getCurrentTime(date) {
    let hours = date.getHours();
    console.log("hours = " + hours);
    let minutes = date.getMinutes();
    console.log("minutes = " + minutes);
    let ampm = (hours >= 12) ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;                 // The hour '0' should be '12'.
    minutes = minutes < 10 ? '0'+ minutes : minutes;
    let timeStatement = hours + ":" + minutes + ampm;
    console.log("timeStatement = " + timeStatement);
    return timeStatement;
}