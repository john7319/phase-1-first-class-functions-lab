// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2)
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(a){
    return function(b){
        return a * b;
    }
}

function fareDoubler(fare){
    return fare *= 2;
}

function fareTripler(fare){
    return fare *=3;
}

function selectDifferentDrivers(drivers, selectionFunction) {
    return selectionFunction(drivers);    
}