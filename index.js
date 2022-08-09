const returnFirstTwoDrivers = function (array) {
    return [array[0], array[1]];
}

const returnLastTwoDrivers = function (array) {
    return [array[(array.length)-2], array[(array.length)-1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
    return function (value) {
        return multiplier*value};
}

const fareDoubler = function (fare) {
    return fare*2
}

const fareTripler = function (fare) {
    return fare*3
}

const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };
