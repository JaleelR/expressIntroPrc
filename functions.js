const collect = require("collect.js");


function mode(nums) {
    let mode = collect(nums).mode().toString();

    return parseInt(mode)
}

function median(nums) {
    let median = collect(nums).median();
    return median;
}

function mean(nums) {
    let avg = collect(nums).avg();
    return avg;
}

function realNumbers(nums) {
    let realNums = [];
    for (let num of nums) {
        realNums.push(parseInt(num))

    }
    return realNums;
}
   
 //module should have no s at the end     
module.exports = {mean, median, mode, realNumbers}