"use strict";
// Question 116: Create a switch case that matches several cases to the same code block, representing seasons.
Object.defineProperty(exports, "__esModule", { value: true });
function getSeasons(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
            console.log("Spring");
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Autumn");
            break;
    }
}
getSeasons(3);
getSeasons(8);
