const express = require("express");
const { mean, median, mode, realNumbers } = require("./functions");
const ExpressError = require("./ExpressError")
const app = express();
app.use(express.json());



      
app.get("/mean", (req, res, next) => {
    try {
        let numbers = req.query["nums"].split(",");
        for (let num of numbers) {
            if (isNaN(num)) {
                throw new ExpressError(`${num} is not a number`, 400)
            }
        }

          if (numbers == "") {
            throw new ExpressError(`numbers required`, 400)
        }
        let nums = realNumbers(numbers);
        let answer = mean(nums)
        return res.json({
                operation: "mean",
                value: answer
                });
        } catch (e) {
        next(e)
    }
})

app.get("/median", (req, res, next) => {
    try {
        let numbers = req.query["nums"].split(",");
        for (let num of numbers) {
            if (isNaN(num)) {
                throw new ExpressError(`${num} is not a number`, 400)
            }
        }
        if (numbers == "") {
            throw new ExpressError(`numbers required`, 400)
        }
        let nums = realNumbers(numbers);
        let answer = median(nums)
        return res.json({
                operation: "median",
                value: answer
                });
        } catch (e) {
        next(e)
    }
})

app.get("/mode", (req, res, next) => {
    try {
        let numbers = req.query["nums"].split(",");
        for (let num of numbers) {
            if (isNaN(num)) {
                throw new ExpressError(`${num} is not a number`, 400)
            }
        }
          if (numbers == "") {
            throw new ExpressError(`numbers required`, 400)
        }
        let nums = realNumbers(numbers);
        let answer = mode(nums)
        return res.json({
                operation: "mode",
                value: answer
                });
        } catch (e) {
        next(e)
    }
})





// app.get("/median", (req, res) => {
//     try {
       
//     } catch (e) {
//         next()
//     }
// })
// app.get("/mode", (req, res) => {
//     try {
       
//     } catch (e) {
//         next()
//     }
// })


//handles 404
app.use((req, res, next) => {
   const e =  new ExpressError("page Not Found", 404)
    next(e)
})

//Error Handler
app.use(function (err, req, res, next) {
    let status = err.status || 500;
    let message = err.msg

    return res.status(status).json({
        error: { message, status }
    });
});


app.listen(3000, function () {
    console.log("server running on port 3000")
});