var express = require("express");
var router  = express.Router();
var Fun = require("../models/fun");
var middleware = require("../middleware");
var request = require("request");

//INDEX - show all funs
router.get("/", function(req, res){
    // Get all funs from DB
    Fun.find({}, function(err, allFuns){
       if(err){
           console.log(err);
       } else {
           request('https://maps.googleapis.com/maps/api/geocode/json?address=sardine%20lake%20ca&key=AIzaSyBtHyZ049G_pjzIXDKsJJB5zMohfN67llM', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body); // Show the HTML for the Modulus homepage.
                res.render("funs/index",{funs:allFuns});

            }
});
       }
    });
});

//CREATE - add new fun to DB
router.post("/", middleware.isLoggedIn, function(req, res){
    // get data from form and add to funs array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newFun = {name: name, image: image, description: desc, author:author}
    // Create a new fun and save to DB
    Fun.create(newFun, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to funs page
            console.log(newlyCreated);
            res.redirect("/funs");
        }
    });
});

//NEW - show form to create new fun
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("funs/new"); 
});

// SHOW - shows more info about one fun
router.get("/:id", function(req, res){
    //find the fun with provided ID
    Fun.findById(req.params.id).populate("comments").exec(function(err, foundFun){
        if(err){
            console.log(err);
        } else {
            console.log(foundFun)
            //render show template with that fun
            res.render("funs/show", {fun: foundFun});
        }
    });
});

router.get("/:id/edit", middleware.checkUserFun, function(req, res){
    console.log("IN EDIT!");
    //find the fun with provided ID
    Fun.findById(req.params.id, function(err, foundFun){
        if(err){
            console.log(err);
        } else {
            //render show template with that fun
            res.render("funs/edit", {fun: foundFun});
        }
    });
});

router.put("/:id", function(req, res){
    var newData = {name: req.body.name, image: req.body.image, description: req.body.desc};
    Fun.findByIdAndUpdate(req.params.id, {$set: newData}, function(err, fun){
        if(err){
            req.flash("error", err.message);
            res.redirect("back");
        } else {
            req.flash("success","Successfully Updated!");
            res.redirect("/funs/" + fun._id);
        }
    });
});


//middleware
// function isLoggedIn(req, res, next){
//     if(req.isAuthenticated()){
//         return next();
//     }
//     req.flash("error", "You must be signed in to do that!");
//     res.redirect("/login");
// }

module.exports = router;

