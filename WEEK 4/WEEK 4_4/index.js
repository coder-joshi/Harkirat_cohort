const express = require("express")
const app = express()

function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if (age>=14) {
        next()
    }else{
        res.json({
            msg: "You did not qualify the age criteria"
        })
    }
}

app.use(isOldEnoughMiddleware)

app.get("/ride1",isOldEnoughMiddleware, function(req,res){
    res.json({
        msg: "You have successfully riden ride1"
    })
})

app.get("/ride2",isOldEnoughMiddleware, function(req,res){
    res.json({
        msg: "You have successfully riden ride2"
    })
})

app.listen(3000)