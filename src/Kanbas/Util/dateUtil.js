export function getCurrentDate(separator = '-') {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}

export function availableText(quiz) {
    console.log("quiz = " + JSON.stringify(quiz));
    let today = getCurrentDate();
    let partsA = quiz.availableFromDate.split('-');
    let availableDate = new Date(partsA[0], partsA[1] - 1, partsA[2]);
    let partsB = quiz.untilDate.split('-');
    let availableUntilDate = new Date(partsB[0], partsB[1] - 1, partsB[2]);

    if (availableDate < today) {       // If Available date is before today.
        return 1;
    } else if (today < availableDate) {        // If current date is before Available Date.
        return 2;
    } else {    // If current date is between Available Date and Available Until Date.
        return 3;
    }
}