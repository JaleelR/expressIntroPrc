//test should have no s at the end 
const { mean, mode, median } = require("./functions");


test("list of nums should return correct mean", function () {
    let nums = [30, 20, 10]
    expect(mean(nums)).toEqual(20)
})

test("list of nums should return correct mode", function () {
    let nums = [1, 3, 3, 6, 7, 8, 9]
    expect(mode(nums)).toEqual(3)
})

test("list of nums should return correct median", function () {
    let nums = [1, 3, 3, 6, 7, 8, 9]
    expect(median(nums)).toEqual(6)
})